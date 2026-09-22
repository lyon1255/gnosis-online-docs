# Death Events


Halál, respawn, resurrection. 


Events: **6**

## `1. PLAYER_RESPAWNED`
A lokális player a szerver által kijelölt helyen újra aktív.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `position` | `UnityEngine.Vector3` | `{ x: number; y: number; z: number }` | No |  |
| `floorId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_RESPAWNED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishRespawned(...)`

## `2. PLAYER_RESPAWN_SCHEDULED`
A helyi játékos számára authoritative respawn időpont/hely meghatározódott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `respawnAt` | `System.DateTime` | `string` | No |  |
| `bindPointId` | `int?` | `number | null` | Yes |  |
| `floorId` | `int` | `number` | No |  |
| `mapId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_RESPAWN_SCHEDULED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishRespawnScheduled(...)`

## `3. RESURRECTION_OFFERED`
Másik játékos érvényes resurrection ajánlatot küldött; nincs automatikus élesztés.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `offerId` | `System.Guid` | `string` | No |  |
| `caster` | `EntityRef` | `EntityRef` | No |  |
| `spellId` | `int` | `number` | No |  |
| `expiresAt` | `System.DateTime?` | `string | null` | Yes | ha az ajánlat időkorlátos |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RESURRECTION_OFFERED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishResurrectionOffered(...)`

## `4. RESURRECTION_OFFER_ENDED`
Egy resurrection ajánlat elfogadás, elutasítás, lejárat vagy érvényvesztés miatt lezárult.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `offerId` | `System.Guid` | `string` | No |  |
| `result` | `ResurrectionOfferResult` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("RESURRECTION_OFFER_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishResurrectionOfferEnded(...)`

## `5. UNIT_DIED`
Egy legitim módon látható entity meghalt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `EntityRef` | `EntityRef` | No | meghalt entity |
| `killer` | `EntityRef` | `EntityRef | null` | Yes | ismert killing source |
| `spellId` | `int?` | `number | null` | Yes | halálos effect, ha van |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_DIED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishDied(...)`

## `6. UNIT_RESURRECTED`
Egy halott karakter resurrection effect eredményeként visszatért.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `unit` | `EntityRef` | `EntityRef` | No |  |
| `caster` | `EntityRef` | `EntityRef | null` | Yes |  |
| `spellId` | `int?` | `number | null` | Yes |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("UNIT_RESURRECTED", payload => {
    // payload.<field>
});
```

C# publisher: `DeathEvents.PublishResurrected(...)`

