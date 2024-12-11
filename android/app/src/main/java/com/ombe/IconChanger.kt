package com.ombe

import android.content.ComponentName
import android.content.pm.PackageManager
import android.widget.Toast
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class IconChanger(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val reactContext: ReactApplicationContext = reactContext

    override fun getName(): String {
        return "IconChanger"
    }

    @ReactMethod
    fun changeIcon(enableIntent: String, disableIntent: String?, response: Promise) {
        try {
            val packageManager = reactContext.packageManager

            // Enable the new icon
            val activeIntent = "com.ombe.$enableIntent"
            Toast.makeText(reactContext, "Enabling $enableIntent", Toast.LENGTH_SHORT).show()
            packageManager.setComponentEnabledSetting(
                ComponentName("com.ombe", activeIntent),
                PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                PackageManager.DONT_KILL_APP
            )

            // Disable the old icon (if provided)
            if (!disableIntent.isNullOrEmpty() && disableIntent != enableIntent) {
                val disabledIntent = "com.ombe.$disableIntent"
                Toast.makeText(reactContext, "Disabling $disableIntent", Toast.LENGTH_SHORT).show()
                packageManager.setComponentEnabledSetting(
                    ComponentName("com.ombe", disabledIntent),
                    PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                    PackageManager.DONT_KILL_APP
                )
            }

            response.resolve(enableIntent)
        } catch (e: Exception) {
            response.reject("Error", e)
        }
    }
}
