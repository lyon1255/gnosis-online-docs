# Currency Events


Gameplay money. 


Events: **1**

## `1. PLAYER_MONEY_CHANGED`
A karakter gameplay-money egyenlege authoritative tranzakció miatt változott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `current` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `delta` | `long` | `number` | No | Canonical import default: Long, pending GAP-005 end-to-end numeric-width finalization. |
| `reason` | `CurrencyChangeReason` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("PLAYER_MONEY_CHANGED", payload => {
    // payload.<field>
});
```

C# publisher: `CurrencyEvents.PublishMoneyChanged(...)`

