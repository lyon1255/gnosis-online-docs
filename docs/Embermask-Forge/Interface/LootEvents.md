# Loot Events


Szemantikus loot-jutalmazás. 


Events: **1**

## `1. LOOT_GRANTED`
A szerver személyes lootként vagy más loot-source-ból jutalmat osztott a lokális karakternek.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `source` | `EntityRef` | `EntityRef | null` | Yes | loot forrása, ha publikus |
| `reward` | `RewardInfo` | `RewardInfo` | No | ténylegesen kiosztott jutalom |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("LOOT_GRANTED", payload => {
    // payload.<field>
});
```

C# publisher: `LootEvents.PublishGranted(...)`

