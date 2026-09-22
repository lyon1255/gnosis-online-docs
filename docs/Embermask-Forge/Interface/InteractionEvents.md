# Interaction Events


NPC/world interaction és dialogue. 


Events: **4**

## `1. INTERACTION_ENDED`
Az aktív interaction session lezárult vagy érvényét vesztette.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `interactionId` | `System.Guid` | `string` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INTERACTION_ENDED", payload => {
    // payload.<field>
});
```

C# publisher: `InteractionEvents.PublishEnded(...)`

## `2. INTERACTION_STARTED`
A lokális karakter szerver által elfogadott NPC/world-object interakciót kezdett.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `interactionId` | `System.Guid` | `string` | No |  |
| `target` | `EntityRef` | `EntityRef` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("INTERACTION_STARTED", payload => {
    // payload.<field>
});
```

C# publisher: `InteractionEvents.PublishStarted(...)`

## `3. NPC_DIALOGUE_CLOSED`
Az aktuális NPC dialogue bezárult vagy invalidálódott.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `npc` | `EntityRef` | `EntityRef` | No |  |
| `dialogueId` | `int` | `number` | No |  |
| `reasonCode` | `string` | `string` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("NPC_DIALOGUE_CLOSED", payload => {
    // payload.<field>
});
```

C# publisher: `InteractionEvents.PublishDialogueClosed(...)`

## `4. NPC_DIALOGUE_OPENED`
Egy NPC engedélyezett dialogue state-je megnyílt.

| Field | C# Type | JS Type | Nullable | Description |
|---|---|---|:---:|---|
| `npc` | `EntityRef` | `EntityRef` | No |  |
| `dialogueId` | `int` | `number` | No |  |

JavaScript:
```javascript
const unsubscribe = Forge.Events.on("NPC_DIALOGUE_OPENED", payload => {
    // payload.<field>
});
```

C# publisher: `InteractionEvents.PublishDialogueOpened(...)`

