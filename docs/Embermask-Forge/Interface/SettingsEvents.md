# Settings Events

Local settings events relevant to UI and AddOns, including keybinds, audio, UI scale, and locale.

## Event index

| Event | Description |
|---|---|
| `AUDIO_SETTINGS_CHANGED` | Published when the authoritative audio settings state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling. |
| `KEYBIND_CHANGED` | Published when the authoritative keybind state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling. |
| `LOCALE_CHANGED` | Published when the authoritative locale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling. |
| `UI_SCALE_CHANGED` | Published when the authoritative ui scale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `AUDIO_SETTINGS_CHANGED`

Published when the authoritative audio settings state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `groupId` | `string` | `string` | No | Stable identifier of the participating group. |
| `value` | `float` | `number` | No | Current value represented by this entry. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("AUDIO_SETTINGS_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SettingsEvents.PublishAudioSettingsChanged(
    eventBus,
    groupId,
    value
);
```

## `KEYBIND_CHANGED`

Published when the authoritative keybind state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `actionId` | `string` | `string` | No | Stable content identifier of the action or ability. |
| `binding` | `string` | `string` | No | Binding-state code exposed by the item system. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("KEYBIND_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SettingsEvents.PublishKeybindChanged(
    eventBus,
    actionId,
    binding
);
```

## `LOCALE_CHANGED`

Published when the authoritative locale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `locale` | `string` | `string` | No | Active locale identifier, such as a language-region code. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("LOCALE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SettingsEvents.PublishLocaleChanged(
    eventBus,
    locale
);
```

## `UI_SCALE_CHANGED`

Published when the authoritative ui scale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `scale` | `float` | `number` | No | Current UI scale multiplier. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("UI_SCALE_CHANGED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
SettingsEvents.PublishUiScaleChanged(
    eventBus,
    scale
);
```

