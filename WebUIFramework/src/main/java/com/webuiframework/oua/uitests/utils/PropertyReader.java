package com.webuiframework.oua.uitests.utils;

import java.util.Enumeration;
import java.util.MissingResourceException;
import java.util.Properties;
import java.util.ResourceBundle;

public final class PropertyReader {

    private PropertyReader(){}

    /**
     * Get properties from file
     * @param properties - properties object
     * @param className - file with properties className.properties
     */
    public static void getProperties(Properties properties, String className) {
        try {
            ResourceBundle source = ResourceBundle.getBundle(className);
            if (source != null) {
                Enumeration<String> keys = source.getKeys();
                while (keys.hasMoreElements()) {
                    String key = keys.nextElement();
                    properties.put(key, source.getString(key));
                }
            }
        } catch (MissingResourceException e) {
            //in case no properties for class found, ignore
            //it's not exactly that class should have property file
        }
    }
}