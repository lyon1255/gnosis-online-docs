# Contract Events


Adventurer Contract lifecycle. 


Events: **5**

## `1. CONTRACT_ACQUIRED`
Guild vagy szervezett party érvényes Adventurer Contractot kapott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `contract` | `ContractInfo` | `ContractInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONTRACT_ACQUIRED", payload => {
    // payload.<field>
});
```

C# publisher: `ContractEvents.PublishAcquired(...)`

## `2. CONTRACT_EXPIRED`
Contract normál időbeli lifecycle miatt lejárt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No |  |
| `expiredAt` | `System.DateTime` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONTRACT_EXPIRED", payload => {
    // payload.<field>
});
```

C# publisher: `ContractEvents.PublishExpired(...)`

## `3. CONTRACT_PROGRESS_CHANGED`
Fenntartási patrol/tisztítás kötelezettség progressze változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `contract` | `ContractInfo` | `ContractInfo` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONTRACT_PROGRESS_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `ContractEvents.PublishProgressChanged(...)`

## `4. CONTRACT_REVOKED`
Council által jóváhagyott végleges jogvesztés megtörtént.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONTRACT_REVOKED", payload => {
    // payload.<field>
});
```

C# publisher: `ContractEvents.PublishRevoked(...)`

## `5. CONTRACT_SUSPENDED`
Gameplay trigger review-t nyitott és az ideiglenes benefit felfüggesztődött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `contractId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONTRACT_SUSPENDED", payload => {
    // payload.<field>
});
```

C# publisher: `ContractEvents.PublishSuspended(...)`

