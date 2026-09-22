# System Events


Kapcsolat, loading, world entry, globális kliens lifecycle. 


Events: **11**

## `1. CHARACTER_ROSTER_CHANGED`
A helyi account karakterlistája létrehozás/törlés vagy refresh után megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `revision` | `long` | `number` | No | lokális roster revision Non-negative revision/identifier; represented as Long in the public Forge schema. |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHARACTER_ROSTER_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishCharacterRosterChanged(...)`

## `2. CHARACTER_SELECTION_CHANGED`
A Character Selector aktív karaktere megváltozott vagy törlődött.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `characterGuid` | `System.Guid?` | `string | null` | Yes | kiválasztott karakter vagy null |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CHARACTER_SELECTION_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishCharacterSelectionChanged(...)`

## `3. CONNECTION_STATE_CHANGED`
A kliens gameplay-kapcsolati állapota megváltozott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `ConnectionState` | `string` | No | új kapcsolatállapot |
| `reasonCode` | `string` | `string | null` | Yes | nem lokalizált okkód, ha van |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("CONNECTION_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishConnectionStateChanged(...)`

## `4. GLOBAL_ANNOUNCEMENT_RECEIVED`
A kliens számára engedélyezett globális szerver announcement érkezett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `message` | `string` | `string` | No | megjelenítendő szöveg |
| `severityCode` | `string` | `string` | No | UI-súlyossági machine code |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("GLOBAL_ANNOUNCEMENT_RECEIVED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishGlobalAnnouncementReceived(...)`

## `5. LOADING_STATE_CHANGED`
Egy world/Floor betöltési lifecycle állapota változik.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `state` | `LoadingState` | `string` | No | új loading state |
| `context` | `string` | `string | null` | Yes | betöltési kontextus azonosítója |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("LOADING_STATE_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishLoadingStateChanged(...)`

## `6. RECONNECT_COMPLETED`
Reconnect után új authoritative snapshot sikeresen alkalmazva.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | helyreállított Floor |
| `mapId` | `int` | `number` | No | helyreállított map |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RECONNECT_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishReconnectCompleted(...)`

## `7. RECONNECT_FAILED`
Az újracsatlakozási folyamat sikertelen.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `reasonCode` | `string` | `string` | No | hibaok |
| `willRetry` | `bool` | `boolean` | No | várható-e új automatikus kísérlet |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RECONNECT_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishReconnectFailed(...)`

## `8. RECONNECT_STARTED`
A kliens automatikus vagy explicit újracsatlakozási folyamatot kezd.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `attempt` | `int` | `number` | No | aktuális próbálkozás sorszáma |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RECONNECT_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishReconnectStarted(...)`

## `9. WORLD_ENTRY_COMPLETED`
A kliens authoritative world state-je inicializálódott és a világ használható.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | aktív Floor |
| `mapId` | `int` | `number` | No | aktív map |
| `layerId` | `string` | `string | null` | Yes | publikus layer-azonosító, ha a layer UI-szinten ismert |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_COMPLETED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishWorldEntryCompleted(...)`

## `10. WORLD_ENTRY_FAILED`
A world entry a használható állapot előtt meghiúsult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int?` | `number | null` | Yes | cél Floor, ha ismert |
| `reasonCode` | `string` | `string` | No | stabil hibaok |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_FAILED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishWorldEntryFailed(...)`

## `11. WORLD_ENTRY_STARTED`
Megkezdődött a belépés a kiválasztott world/Floor példányba.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `floorId` | `int` | `number` | No | cél Floor |
| `mapId` | `int` | `number` | No | cél map |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("WORLD_ENTRY_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `SystemEvents.PublishWorldEntryStarted(...)`

