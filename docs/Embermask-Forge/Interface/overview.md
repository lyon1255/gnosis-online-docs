# Embermask Forge Interface

The **Embermask Forge Interface** is the public event API used by Built-In UI modules and Community AddOns to react to changes in Gnosis Online.

Instead of repeatedly querying the game state, AddOns can subscribe to events and update only when something actually changes.

```text
Gnosis Game State
        ↓
Generated Event Publisher
        ↓
Embermask Forge Event System
        ↓
Built-In UI / Community AddOn
```

## Event Domains

Events are grouped into domains to keep the API easy to navigate.

For example:

* `UnitEvents` — player, target, focus, pet and other addressable unit changes
* `CombatEvents` — combat-related events
* `InventoryEvents` — inventory and item changes
* `QuestEvents` — quest state changes

Each domain has its own documentation page containing the available events, payload fields and their types.

The domain pages in this section are generated automatically from the Embermask Forge Event Designer.

---

## Listening to Events

Use `Forge.Events.on()` to subscribe to an event.

```javascript
const unsubscribe = Forge.Events.on(
    "UNIT_HEALTH_CHANGED",
    payload => {
        Forge.log(
            `${payload.unit}: ${payload.current}/${payload.max}`
        );
    }
);
```

The callback receives the event payload documented on the corresponding event page.

When the listener is no longer required, call the returned unsubscribe function:

```javascript
unsubscribe();
```

You can also remove listeners with `Forge.Events.off()`.

---

## Unit-specific Events

For events containing a unit token, Forge also provides `Forge.Events.onUnit()`.

```javascript
Forge.Events.onUnit(
    "UNIT_HEALTH_CHANGED",
    "player",
    payload => {
        Forge.log(
            `Player health: ${payload.current}/${payload.max}`
        );
    }
);
```

This is useful when an AddOn only cares about a specific unit such as:

```text
player
target
focus
pet
```

---

# Forge.d.ts

`Forge.d.ts` contains TypeScript declarations for the public Embermask Forge JavaScript API.

Your AddOn can still be written entirely in **JavaScript**.

The declaration file is only used by development tools such as Visual Studio Code to provide:

* event name autocomplete
* payload property autocomplete
* parameter information
* type information
* JavaScript type checking
* Forge API IntelliSense

It is **not required by the game at runtime** and should not be included with the installed AddOn.

[Download Forge.d.ts](./Forge.d.ts)

---

## Installing Forge.d.ts

Create a `types` folder inside your AddOn development project:

```text
MyAddon/
├── MyAddon.js
├── jsconfig.json
└── types/
    └── Forge.d.ts
```

Download `Forge.d.ts` and place it inside:

```text
MyAddon/types/Forge.d.ts
```

Then create a `jsconfig.json` in the project root:

```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true
    },
    "include": [
        "**/*.js",
        "types/**/*.d.ts"
    ]
}
```

Open the folder in Visual Studio Code.

No package installation or build step is required.

---

## IntelliSense Example

After installing `Forge.d.ts`, typing:

```javascript
Forge.Events.on("UNIT_
```

can suggest available event names such as:

```text
UNIT_HEALTH_CHANGED
```

Inside the callback:

```javascript
Forge.Events.on(
    "UNIT_HEALTH_CHANGED",
    payload => {
        payload.
    }
);
```

the editor can suggest:

```text
unit
guid
current
max
```

and understands their types:

```text
unit     → string
guid     → string
current  → number
max      → number
```

This means AddOn developers do not need to memorize the complete Embermask Forge event API.

---

## Runtime vs Development

It is important to separate the two:

```text
Forge.d.ts
    ↓
Editor / IntelliSense only

Forge.Events
    ↓
Actual Gnosis Online runtime
```

`Forge.d.ts` describes the API.

The actual implementation is provided by **Embermask Forge inside Gnosis Online**.

---

## Updating Forge.d.ts

As the Forge API grows, new versions of `Forge.d.ts` may contain additional events, payloads and Forge systems.

If the documentation lists an event that your local declaration file does not recognize, download the latest version and replace your existing:

```text
types/Forge.d.ts
```

file.

The Event Interface documentation and `Forge.d.ts` are generated from the same Forge definitions, keeping the documented API and development types synchronized.
