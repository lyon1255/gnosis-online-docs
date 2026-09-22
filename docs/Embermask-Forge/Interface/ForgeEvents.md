# Embermask Forge Events

## Event Domains

# Unit
Public events related to addressable units such as player, target, focus, pet, party members and bosses. Unit tokens are aliases; GUID identifies the actual entity.

## `TARGET_CHANGED`
Published when the local target token is bound to an entity or cleared.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Target token. Normally target. |
| `guid` | `string` | `string` | No | Entity identifier that was targeted or cleared. |
| `exists` | `bool` | `boolean` | No | True when the target is now bound; false when it was cleared. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("TARGET_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishTargetChanged(...)`

## `UNIT_HEALTH_CHANGED`
Published when the health of an addressable unit entity changes. Every active unit token alias for that entity can receive the update.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No | Unit token receiving this alias-specific update. |
| `guid` | `string` | `string` | No | Stable entity identifier shared by all aliases for the same entity. |
| `current` | `int` | `number` | No | Current health after the change. |
| `max` | `int` | `number` | No | Maximum health after the change. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_HEALTH_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `UnitEvents.PublishHealthChanged(...)`

