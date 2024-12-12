package com.ombe

import android.app.Application
import android.content.Intent
import android.content.pm.ShortcutInfo
import android.content.pm.ShortcutManager
import android.graphics.drawable.Icon
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost =
        object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).packages.toMutableList()
                // Add custom packages manually
                packages.add(PipModulePackage()) 
                packages.add(CustomPackages()) 

                return packages
            }

            override fun getJSMainModuleName(): String = "index"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

            override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
        }

    override val reactHost: ReactHost
        get() = getDefaultReactHost(applicationContext, reactNativeHost)

    override fun onCreate() {
        super.onCreate()

        // Initialize SoLoader for React Native
        SoLoader.init(this, OpenSourceMergedSoMapping)

        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            load()
        }
    }

    /**
     * Configures app shortcuts for the launcher.
     */
    private fun setupAppShortcuts() {
        val shortcutManager = getSystemService(ShortcutManager::class.java)

        if (shortcutManager != null) {
            // Remove any existing dynamic shortcuts
            shortcutManager.removeAllDynamicShortcuts()

            // Handle pinned shortcuts
            shortcutManager.pinnedShortcuts.forEach { shortcut ->
                shortcutManager.disableShortcuts(
                    listOf(shortcut.id),
                    "Shortcut disabled by app."
                )
            }

            // Define the shortcuts
            val shortcuts = listOf(
                ShortcutInfo.Builder(this, "home")
                    .setShortLabel("Home")
                    .setLongLabel("View Home")
                    .setIcon(Icon.createWithResource(this, R.drawable.ic_home))
                    .setIntent(
                        Intent(this, MainActivity::class.java).apply {
                            action = Intent.ACTION_VIEW
                            putExtra("shortcut_type", "home")
                        }
                    )
                    .build(),

                ShortcutInfo.Builder(this, "cart")
                    .setShortLabel("Cart")
                    .setLongLabel("View Cart")
                    .setIcon(Icon.createWithResource(this, R.drawable.ic_cart))
                    .setIntent(
                        Intent(this, MainActivity::class.java).apply {
                            action = Intent.ACTION_VIEW
                            putExtra("shortcut_type", "cart")
                        }
                    )
                    .build()
            )

            // Set the shortcuts dynamically
            shortcutManager.dynamicShortcuts = shortcuts
        }
    }

    /**
     * Emit event to JS side when a shortcut is activated.
     */
    private fun emitShortcutActionEvent(shortcutType: String) {
        val reactContext = reactNativeHost.reactInstanceManager.currentReactContext
        reactContext?.let {
            it.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("ShortcutAction", shortcutType)
        }
    }
}
