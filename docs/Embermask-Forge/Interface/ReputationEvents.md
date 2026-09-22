# Reputation Events


Szervezet/village reputáció. 


Events: **2**

## `1. REPUTATION_CHANGED`
Egy szervezethez/village-hez tartozó reputációpont változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `organizationId` | `int` | `number` | No |  |
| `current` | `int` | `number` | No |  |
| `delta` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("REPUTATION_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ReputationEvents.PublishChanged(...)`

## `2. REPUTATION_STANDING_CHANGED`
Az aktuális content-defined reputation standing megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `organizationId` | `int` | `number` | No |  |
| `previousStandingId` | `string` | `string | null` | Yes |  |
| `currentStandingId` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("REPUTATION_STANDING_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ReputationEvents.PublishStandingChanged(...)`

