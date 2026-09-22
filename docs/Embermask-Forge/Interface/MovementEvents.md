# Movement Events


Lokális mozgási paraméterek és reconciliation. 


Events: **2**

## `1. PLAYER_MOVEMENT_SPEED_CHANGED`
A lokális játékos authoritative move speed értéke módosult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `float` | `number` | No | aktuális move speed |
| `previous` | `float` | `number` | No | előző move speed |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_MOVEMENT_SPEED_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `MovementEvents.PublishMoveSpeedChanged(...)`

## `2. PLAYER_POSITION_CORRECTED`
A szerver reconciliation korrigálta a lokálisan prediktált pozíciót.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No | authoritative pozíció |
| `correctionDistance` | `float` | `number` | No | alkalmazott korrekció nagysága |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_POSITION_CORRECTED", payload => {
    // payload.<field>
});
```

C# publisher: `MovementEvents.PublishPositionCorrected(...)`

