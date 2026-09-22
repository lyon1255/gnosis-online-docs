# Settings Events


UI-releváns lokális settings. 


Events: **4**

## `1. AUDIO_SETTINGS_CHANGED`
Egy publikus audio group hangerőbeállítása módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `groupId` | `string` | `string` | No |  |
| `value` | `float` | `number` | No | normalizált hangerő |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AUDIO_SETTINGS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SettingsEvents.PublishAudioSettingsChanged(...)`

## `2. KEYBIND_CHANGED`
Egy keyboard/mouse action binding módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `actionId` | `string` | `string` | No |  |
| `binding` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("KEYBIND_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SettingsEvents.PublishKeybindChanged(...)`

## `3. LOCALE_CHANGED`
Beta-fázisban a kliens aktív lokalizációja megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `locale` | `string` | `string` | No | locale code |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("LOCALE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SettingsEvents.PublishLocaleChanged(...)`

## `4. UI_SCALE_CHANGED`
Forge/UI skálázási setting módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `scale` | `float` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UI_SCALE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SettingsEvents.PublishUiScaleChanged(...)`

