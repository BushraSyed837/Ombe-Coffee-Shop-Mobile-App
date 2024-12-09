package com.ombe

import android.app.PictureInPictureParams
import android.content.Intent
import android.os.Build
import android.util.Rational
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultReactActivityDelegate
import androidx.annotation.RequiresApi
import android.util.Log

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        handleIntent(intent) // Handle the initial intent when the app is launched
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        handleIntent(intent) // Handle any new intent (shortcut click)
    }

    private fun handleIntent(intent: Intent?) {
        val shortcutType = intent?.getStringExtra("shortcut_type")
        if (shortcutType != null) {
            // Pass the shortcut type to React Native by updating the intent
            Log.d("MainActivity", "Received shortcut: $shortcutType")
            intent.putExtra("initialRoute", shortcutType) // Add the route to navigate to
            setIntent(intent) // Set the new intent so React Native can access it
        }
    }

    override fun onUserLeaveHint() {
        super.onUserLeaveHint()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            enterPipMode()
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun enterPipMode() {
        val aspectRatio = Rational(16, 9) // Aspect ratio for PiP mode
        val pipBuilder = PictureInPictureParams.Builder()
        pipBuilder.setAspectRatio(aspectRatio)
        enterPictureInPictureMode(pipBuilder.build())
    }

    override fun getMainComponentName(): String = "ombe" // This should be the name of your main component

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName) // Remove fabricEnabled
}
