# Aura Events


Buff/debuff instance lifecycle. 


Events: **3**

## `1. AURA_ADDED`
Egy buff/debuff instance megjelent egy addressable uniton.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No |  |
| `guid` | `System.Guid` | `string` | No |  |
| `aura` | `AuraInfo` | `AuraInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AURA_ADDED", payload => {
    // payload.<field>
});
```

C# publisher: `AuraEvents.PublishAdded(...)`

## `2. AURA_REMOVED`
Egy aura instance eltűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No |  |
| `guid` | `System.Guid` | `string` | No |  |
| `effectInstanceId` | `System.Guid` | `string` | No |  |
| `spellId` | `int` | `number` | No |  |
| `reason` | `AuraRemovalReason` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AURA_REMOVED", payload => {
    // payload.<field>
});
```

C# publisher: `AuraEvents.PublishRemoved(...)`

## `3. AURA_UPDATED`
Aura stackje, időtartama vagy más publikus instance-state-je változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `string` | `string` | No |  |
| `guid` | `System.Guid` | `string` | No |  |
| `aura` | `AuraInfo` | `AuraInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("AURA_UPDATED", payload => {
    // payload.<field>
});
```

C# publisher: `AuraEvents.PublishUpdated(...)`

