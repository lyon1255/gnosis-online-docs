# Interaction Events

Client-visible interaction lifecycle events for NPCs, world objects, and dialogue sessions.

## Event index

| Event | Description |
|---|---|
| `INTERACTION_ENDED` | Published when interaction reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable. |
| `INTERACTION_STARTED` | Published when interaction starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state. |
| `NPC_DIALOGUE_CLOSED` | Published when npc dialogue closes or is no longer available to the local player. |
| `NPC_DIALOGUE_OPENED` | Published when npc dialogue becomes open and available to the local player. |

## Subscription lifecycle

`Forge.Events.on(...)` returns an unsubscribe callback. Keep that callback when the subscription has a bounded lifecycle, then invoke it when the listener is no longer needed.

```javascript
const unsubscribe = Forge.Events.on("EVENT_NAME", callback);
// later
unsubscribe();
```

## `INTERACTION_ENDED`

Published when interaction reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `interactionId` | `System.Guid` | `string` | No | Stable identifier of the interaction referenced by this payload. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INTERACTION_ENDED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InteractionEvents.PublishEnded(
    eventBus,
    interactionId,
    reasonCode
);
```

## `INTERACTION_STARTED`

Published when interaction starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `interactionId` | `System.Guid` | `string` | No | Stable identifier of the interaction referenced by this payload. |
| `target` | `EntityRef` | `EntityRef` | No | Optional entity targeted by the action or cast. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("INTERACTION_STARTED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InteractionEvents.PublishStarted(
    eventBus,
    interactionId,
    target
);
```

## `NPC_DIALOGUE_CLOSED`

Published when npc dialogue closes or is no longer available to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `npc` | `EntityRef` | `EntityRef` | No | Authoritative npc value associated with this payload. |
| `dialogueId` | `int` | `number` | No | Stable identifier of the dialogue referenced by this payload. |
| `reasonCode` | `string` | `string` | No | Stable, non-localized reason or error code when additional context is available. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("NPC_DIALOGUE_CLOSED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InteractionEvents.PublishDialogueClosed(
    eventBus,
    npc,
    dialogueId,
    reasonCode
);
```

## `NPC_DIALOGUE_OPENED`

Published when npc dialogue becomes open and available to the local player.

### Payload

| Field | C# Type | JavaScript Type | Nullable | Description |
|---|---|---|:---:|---|
| `npc` | `EntityRef` | `EntityRef` | No | Authoritative npc value associated with this payload. |
| `dialogueId` | `int` | `number` | No | Stable identifier of the dialogue referenced by this payload. |

### JavaScript

#### Subscribe

```javascript
const unsubscribe = Forge.Events.on("NPC_DIALOGUE_OPENED", payload => {
    // Read payload fields here.
});
```

#### Unsubscribe

```javascript
unsubscribe();
```

### C#

```csharp
InteractionEvents.PublishDialogueOpened(
    eventBus,
    npc,
    dialogueId
);
```

