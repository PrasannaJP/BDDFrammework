package com.webuiframework.oua.cuke;

import cucumber.runtime.ClassFinder;
import cucumber.runtime.CucumberException;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.RuntimeOptionsFactory;
import cucumber.runtime.io.MultiLoader;
import cucumber.runtime.io.ResourceLoader;
import cucumber.runtime.io.ResourceLoaderClassFinder;
import org.apache.commons.io.FilenameUtils;
import org.testng.ITest;
import org.testng.annotations.Test;

import java.io.IOException;

public class CukeTestImpl implements ITest {

    private final String feature;
    private final String tags;
    private cucumber.runtime.Runtime runtime;

    public CukeTestImpl(String feature, String tags) {
        this.feature = feature;
        this.tags = tags;
        this.runtime = null;
    }

    @Override
    public String getTestName() {
        return FilenameUtils.getName(feature);
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Features")
    public void CucumberRunner() throws Throwable {

        ClassLoader classLoader = getClass().getClassLoader();
        ResourceLoader resourceLoader = new MultiLoader(classLoader);

        RuntimeOptionsFactory roFactory = new RuntimeOptionsFactory(getClass());

        RuntimeOptions ro = roFactory.create();

        ro.getGlue().clear();
        ro.getGlue().add("classpath:");

        ro.getFeaturePaths().clear();
        ro.getFeaturePaths().add(feature);

        if (!tags.isEmpty()) {
            for(String s:tags.split("--tags")){
                if (!s.trim().isEmpty()) {
                    ro.getFilters().add(s.trim());
                }
            }
        }

        ClassFinder classFinder = new ResourceLoaderClassFinder(resourceLoader, classLoader);
        runtime = new cucumber.runtime.Runtime(resourceLoader, classFinder, classLoader, ro);
        try {
            runtime.run();
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
        if (!runtime.getErrors().isEmpty()) {
            throw new CucumberException(runtime.getErrors().get(0));
        }

    }

}

