# Mount Events


Mount collection és állapot. 


Events: **4**

## `1. DISMOUNTED`
A lokális karakter mount state-je megszűnt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("DISMOUNTED", payload => {
    // payload.<field>
});
```

C# publisher: `MountEvents.PublishDismounted(...)`

## `2. MOUNTED`
A lokális karakter sikeresen mount state-be került.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MOUNTED", payload => {
    // payload.<field>
});
```

C# publisher: `MountEvents.PublishMounted(...)`

## `3. MOUNT_AVAILABILITY_CHANGED`
Terület/policy változás miatt egy mount aktuális használhatósága változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No |  |
| `available` | `bool` | `boolean` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MOUNT_AVAILABILITY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `MountEvents.PublishAvailabilityChanged(...)`

## `4. MOUNT_COLLECTED`
A karakter megszerzett egy mountot.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `mountId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("MOUNT_COLLECTED", payload => {
    // payload.<field>
});
```

C# publisher: `MountEvents.PublishCollected(...)`

