---
title: Elysia NPCs
---

# Elysia — NPC Gameplay Database

**Floor:** 1 — Elysia  
**Purpose:** Implementációs NPC-adatbázis  
**Status:** Initial Content Pass

Ez a dokumentum az Elysia területén használt fontos NPC-k gameplay-definícióját tartalmazza.

A Lore-dokumentumokban szereplő személyiség és történeti szerep itt nem ismétlődik teljes részletességgel. Ez a fájl azt rögzíti, hogy az NPC:

- hol spawnol;
- mozog-e;
- milyen szolgáltatást ad;
- mely questeket indítja vagy zárja;
- milyen dialogue state-ekkel rendelkezik;
- milyen implementációs korlátozásokat kell követni.

---

# NPC szabályok

## Fix NPC-k

Elysia fő NPC-jeinek többsége **fix helyen marad**.

Ez production-döntés.

Nem használunk felesleges scripted NPC-walk sequence-eket olyan esetekben, amikor ugyanaz a történet egyszerűbben átadható quest objective-del és új NPC-címmel.

## NPC State

A dialogue state-ek karakterenként változhatnak.

Példa:

```text
DEFAULT
MQ_ACTIVE
MQ_COMPLETE
SQ_AVAILABLE
SQ_ACTIVE
SQ_COMPLETE
POST_FLOOR_COMPLETE
```

A vizuális NPC spawn ettől nem feltétlenül változik.

## Quest Marker

A marker-rendszer később külön UI-döntés.

Ez a dokumentum csak azt rögzíti, hogy az NPC:

- quest giver;
- quest turn-in;
- service NPC;
- lore NPC;
- vagy ezek kombinációja.

---

# NPC-E01-001 — Tarel Venn

**Name:** Tarel Venn  
**Race:** Elf  
**Role:** Nyugati Kapuőrség  
**Default Location:** Elysia West Gate  
**Movement:** Static  
**Combat NPC:** Yes, defensive only  
**Service:** Gate validation  
**Main Quest:** `MQ-E01`

## Quest Relations

**Starts:**
- `MQ-E01 — A másik levegő`

**Turns In:**
- none

## Dialogue States

### DEFAULT

> „Átkelési engedély.”

### FIRST_ARRIVAL

> „Első átkelés.”

> „Akkor először a Főkönyv.”

### POST_MQ_E01

> „A várost már ismered.”

> „A kapu attól még ugyanitt lesz.”

## Developer Notes

- Never escorts player.
- Never leaves post.
- Gate area is safe.
- Does not reveal anything through Gate surface.

---

# NPC-E01-002 — Edrin Sael

**Name:** Edrin Sael  
**Race:** Elf  
**Role:** Emlékezetőr  
**Default Location:** Loeran fája  
**Movement:** Static / minimal idle  
**Combat NPC:** No  
**Service:** Lore interaction  
**Main Quest:** `MQ-E03`  
**Side Quest:** `SQ-E01`

## Quest Relations

**Main Quest:**
- `MQ-E03 — Loeran neve`

**Side Quest:**
- supports `SQ-E01 — A névtelen csomag`

## Dialogue States

### DEFAULT

> „A követ nem kell olvasni.”

### MQ_E03_ACTIVE

> „Mondd ki.”

### LOERAN_TREE_VISITED

> „Most már tudod, miért nincs név a kövön.”

### SQ_E01_ACTIVE

> „Nem az enyém.”

> „És nem is mostani.”

## Developer Notes

- No vendor/service UI.
- Ambient NPC at iconic landmark.

---

# NPC-E01-003 — Illa Orin

**Name:** Illa Orin  
**Race:** Gnome  
**Role:** Helyi Kalandor-nyilvántartás  
**Default Location:** Loeran’s Rest — Kalandorügyi Hivatal  
**Movement:** Static  
**Combat NPC:** No  
**Service:** Registration / progression / Floor completion logging  
**Main Quests:** `MQ-E02`, `MQ-E03`, `MQ-E37`

## Quest Relations

**Starts:**
- `MQ-E02 — A helyi Főkönyv`
- `MQ-E03 — Loeran neve`

**Turn-ins:**
- `MQ-E02`
- `MQ-E37`

## Services

- Kalandor registration
- permanent Kalandor-jelvény
- Loeran’s Rest city map
- Floor completion record

## Dialogue States

### DEFAULT

> „Mit szeretnél bejegyeztetni?”

### FIRST_REGISTRATION

> „A várost igen.”

> „A világot nem.”

### FLOOR1_COMPLETE

> „Megvan.”

> „Akkor lesz munka.”

---

# NPC-E01-004 — Maren Dorr

**Name:** Maren Dorr  
**Race:** Human  
**Role:** Keleti útvonalak felügyelője  
**Default Location:** Loeran’s Rest — East Route Office  
**Movement:** Static  
**Combat NPC:** No  
**Service:** Main Quest hub / expedition routing  
**Main Quest Role:** Primary Floor 1 Main Quest coordinator

## Main Quest Relations

Maren többek között az alábbi Main Questeket kezeli:

- `MQ-E04`
- `MQ-E07`
- `MQ-E08`
- `MQ-E09`
- `MQ-E10`
- `MQ-E11`
- `MQ-E14`
- `MQ-E15`
- `MQ-E16`
- `MQ-E17`
- `MQ-E18`
- `MQ-E19`
- `MQ-E21`
- `MQ-E23`
- `MQ-E26`
- `MQ-E27`
- `MQ-E31`
- `MQ-E32`
- `MQ-E35`
- `MQ-E36`

## Dialogue States

### DEFAULT

> „Ha nem tudod, miért mész, ne indulj el.”

### EARLY_EXPLORATION

> „A térképed nem hiányos.”

> „Csak még nem jártál ott.”

### CROWN_INVESTIGATION

> „Most már van mintánk.”

### THRESHOLD_DISCOVERED

> „Most már tudjuk, hol van a következő út.”

### FLOOR1_COMPLETE

> „Ne hidd, hogy kész vagy Elysiával.”

## Developer Notes

- Never escorts player.
- Never teleports player.
- Core fixed quest hub NPC.

---

# NPC-E01-005 — Dorran Kadd

**Name:** Dorran Kadd  
**Race:** Dwarf  
**Class Service:** Warrior Trainer  
**Default Location:** Loeran’s Rest — Warrior Training Room  
**Movement:** Static  
**Service:** Warrior skill training  
**Quest:** `MQ-E06`

## Services

- first Elysia Warrior skill
- future Warrior level-up training
- class dialogue

## Level-Up Rule

Warrior player should return after each level-up.

Exact skill unlocks belong in Class Gameplay documentation.

---

# NPC-E01-006 — Vessa Marr

**Name:** Vessa Marr  
**Race:** Human  
**Class Service:** Assassin Trainer  
**Default Location:** Loeran’s Rest — Assassin Training Room  
**Movement:** Static  
**Service:** Assassin skill training  
**Quest:** `MQ-E06`

## Level-Up Rule

Return after each level-up.

---

# NPC-E01-007 — Halen Marr

**Name:** Halen Marr  
**Race:** Human  
**Role:** Farmer  
**Default Location:** Marrin-farm  
**Movement:** Static / farm idle  
**Main Quest:** `MQ-E04`, `MQ-E05`  
**Side Quest:** `SQ-E05`

## Quest Relations

**Main Quest:**
- supports `MQ-E04`
- starts/supplies `MQ-E05`

**Side Quest:**
- starts `SQ-E05 — A malom, amely elhallgatott`

---

# NPC-E01-008 — Sera Thael

**Name:** Sera Thael  
**Race:** Elf  
**Role:** Terepi gyógyító  
**Default Location:** Loeran’s Rest — Healing House  
**Movement:** Static  
**Main Quest:** `MQ-E05`, `MQ-E06`  
**Service:** Basic medical supplies

## Developer Notes

- Does not teach class spells.
- Directs player to class trainer.

---

# NPC-E01-009 — Fen Orin

**Name:** Fen Orin  
**Race:** Gnome  
**Class Service:** Mage Trainer  
**Default Location:** Loeran’s Rest — Mage Training Room  
**Movement:** Static  
**Quest:** `MQ-E06`

## Level-Up Rule

Return after each level-up.

---

# NPC-E01-010 — Telan Thael

**Name:** Telan Thael  
**Race:** Elf  
**Class Service:** Ranger Trainer  
**Default Location:** Loeran’s Rest — Ranger Training Room  
**Movement:** Static  
**Quest:** `MQ-E06`

## Level-Up Rule

Return after each level-up.

---

# NPC-E01-011 — Mira Venn

**Name:** Mira Venn  
**Race:** Human  
**Class Service:** Cleric Trainer  
**Default Location:** Loeran’s Rest — Cleric Training Room  
**Movement:** Static  
**Quest:** `MQ-E06`

## Level-Up Rule

Return after each level-up.

---

# NPC-E01-012 — Tessa Ormin

**Name:** Tessa Ormin  
**Race:** Gnome  
**Role:** Field-mérő  
**Default Location:** Eastern Measuring Station  
**Movement:** Static  
**Combat NPC:** No  
**Main Quests:** `MQ-E11`, `MQ-E12`, `MQ-E13`, `MQ-E16`, `MQ-E24`, `MQ-E27`, `MQ-E29`, `MQ-E30`  
**Side Quest:** `SQ-E16`

## Services

- Field measurement analysis
- Rewrite/Threshold research dialogue

## Dialogue States

### DEFAULT

> „A változás számít.”

### HIGH_SATURATION

> „Ahol elhallgat a világ, ott figyelj.”

### THRESHOLD_PREHINT

> „Ez nem Field.”

### THRESHOLD_DISCOVERED

> „Nem tudjuk, hogy őrzi-e.”

> „Vagy csak ugyanaz vonzza oda.”

---

# NPC-E01-013 — Coll Marr

**Name:** Coll Marr  
**Race:** Human  
**Role:** Hunter  
**Default Location:** Loeran’s Rest hunting edge  
**Movement:** Static  
**Main Quest:** `MQ-E17`  
**Side Quest:** `SQ-E15`

---

# NPC-E01-014 — Saar Keln

**Name:** Saar Keln  
**Race:** Dwarf  
**Class Service:** Adept Trainer  
**Default Location:** Loeran’s Rest — Adept Training Room  
**Movement:** Static  
**Quest:** `MQ-E06`

## Level-Up Rule

Return after each level-up.

---

# NPC-E01-015 — Sella Dorn

**Name:** Sella Dorn  
**Race:** Human  
**Role:** Farmer  
**Default Location:** Eastern Farmstead  
**Movement:** Static  
**Main Quest:** `MQ-E17`

---

# NPC-E01-016 — Nima Orin

**Name:** Nima Orin  
**Race:** Gnome  
**Role:** Field Surveyor / missing patrol member  
**Default Location Before Rescue:** Abandoned Water Cistern  
**Default Location After Rescue:** Loeran’s Rest — recovery area  
**Movement:** State-based location swap, not escort  
**Main Quest:** `MQ-E14`, `MQ-E15`, `MQ-E25`

## State Machine

### MISSING

Not visible in city.

### FOUND

Visible in cistern.

### RESCUED

Cistern version removed. Recovery-area version enabled.

### RECOVERED

Later city dialogue available.

## Developer Notes

No physical escort back to town.

---

# NPC-E01-017 — Perrin Orin

**Name:** Perrin Orin  
**Race:** Gnome  
**Role:** Drainage worker / water measurement  
**Default Location:** Loeran’s Rest lower streets  
**Movement:** Static  
**Side Quest:** `SQ-E04`

---

# NPC-E01-018 — Lessa Vren

**Name:** Lessa Vren  
**Race:** Gnome  
**Role:** Drainage maintenance  
**Default Location:** Loeran’s Rest lower streets  
**Movement:** Static  
**Side Quest:** `SQ-E04`

---

# NPC-E01-019 — Kalen Voss

**Name:** Kalen Voss  
**Race:** Human  
**Role:** Adventurer ambient NPC  
**Default Location:** Maren’s office exterior  
**Movement:** Static / ambient variation  
**Quest:** None

## Purpose

World population and example returning Adventurer.

---

# NPC-E01-020 — Bran Keld

**Name:** Bran Keld  
**Race:** Dwarf  
**Role:** Stone mason  
**Default Location:** Loeran’s Rest east wall  
**Movement:** Static  
**Side Quests:** `SQ-E01`, `SQ-E02`

---

# NPC-E01-021 — Mera Voss

**Name:** Mera Voss  
**Race:** Human  
**Role:** Civilian / memory quest giver  
**Default Location:** Loeran’s Rest — Loeran tree bench  
**Movement:** Static  
**Side Quest:** `SQ-E03`

---

# NPC-E01-022 — Perrin Orin

**Alias Note:** Duplicate from earlier content pass.

**Canonical NPC ID:** `NPC-E01-017`

Do not create a second NPC entity.

---

# NPC-E01-023 — Lessa Vren

**Alias Note:** Duplicate from earlier content pass.

**Canonical NPC ID:** `NPC-E01-018`

Do not create a second NPC entity.

---

# NPC-E01-024 — Soren Vale

**Name:** Soren Vale  
**Race:** Human  
**Role:** Miller  
**Default Location:** Old Mill upper floor  
**Movement:** Static during SQ-E05  
**Side Quest:** `SQ-E05`

## Post Quest

Can remain as ambient mill NPC after completion.

---

# NPC-E01-025 — Tira Marr

**Name:** Tira Marr  
**Race:** Human  
**Role:** Miller  
**Default Location:** Old Mill water passage → Old Mill  
**Movement:** State swap only  
**Side Quests:** `SQ-E05`, `SQ-E06`

## Developer Notes

No escort path.

During rescue, use separate state/location placement.

---

# NPC-E01-026 — Ressa Voss

**Name:** Ressa Voss  
**Race:** Human  
**Role:** Tailor  
**Default Location:** Loeran’s Rest tailor workshop  
**Movement:** Static  
**Side Quests:** `SQ-E07`, `SQ-E08`

---

# NPC-E01-027 — Jarek Dorr

**Name:** Jarek Dorr  
**Race:** Human  
**Role:** Ferry worker  
**Default Location:** Old Ferry Crossing  
**Movement:** Static  
**Main Quest:** `MQ-E20`  
**Side Quests:** `SQ-E11`, `SQ-E12`

---

# NPC-E01-028 — Nessa Keln

**Name:** Nessa Keln  
**Race:** Dwarf  
**Role:** Ferry worker  
**Default Location:** Old Ferry Crossing  
**Movement:** Static  
**Main Quest:** `MQ-E20`  
**Side Quest:** `SQ-E11`

---

# NPC-E01-029 — Varek Sael

**Name:** Varek Sael  
**Race:** Elf  
**Role:** Former Point One guard / observer  
**Default Location:** Southern Plateau  
**Movement:** Static  
**Side Quest:** `SQ-E10`

---

# NPC-E01-030 — Neral Thael

**Name:** Neral Thael  
**Race:** Elf  
**Role:** Beekeeper  
**Default Location:** Loeran’s Rest north market  
**Movement:** Static  
**Side Quest:** `SQ-E13`

---

# NPC-E01-031 — Beren Kadd

**Name:** Beren Kadd  
**Race:** Dwarf  
**Role:** Farmer  
**Default Location:** Southwestern Farm  
**Movement:** Static  
**Side Quest:** `SQ-E14`

---

# NPC-E01-032 — Varo Keln

**Name:** Varo Keln  
**Race:** Dwarf  
**Role:** Stone analyst  
**Default Location:** Loeran’s Rest measuring station  
**Movement:** Static  
**Side Quest:** `SQ-E16`

---

# Class Trainer Summary

| NPC ID | NPC | Class |
| --- | --- | --- |
| NPC-E01-005 | Dorran Kadd | Warrior |
| NPC-E01-006 | Vessa Marr | Assassin |
| NPC-E01-009 | Fen Orin | Mage |
| NPC-E01-010 | Telan Thael | Ranger |
| NPC-E01-011 | Mira Venn | Cleric |
| NPC-E01-014 | Saar Keln | Adept |

Minden class trainer:

- fix helyen marad;
- szintlépés után újra felkereshető;
- új skill/spell elérhetőséget kezelhet;
- class-specifikus dialogue state-et használhat.

---

# Core Quest NPC Summary

| NPC | Main Quest | Side Quest | Service |
| --- | --- | --- | --- |
| Tarel Venn | Yes | No | Gate |
| Illa Orin | Yes | No | Registration |
| Edrin Sael | Yes | Yes | Lore |
| Maren Dorr | Yes | No | Main Quest Hub |
| Sera Thael | Yes | No | Healing |
| Tessa Ormin | Yes | Yes | Field Research |
| Halen Marr | Yes | Yes | Farm |
| Jarek Dorr | Yes | Yes | Ferry |
| Nima Orin | Yes | No | Story NPC |

---

# Implementation Rules

1. NPC nevét a játékos első beszélgetéskor látja.
2. A név stabil, az NPC ID stabilabb.
3. NPC mozgást csak akkor használunk, ha gameplay-mechanikailag tényleg szükséges.
4. Quest chain progression inkább state swap + objective update legyen.
5. Escortot csak külön indokolt questnél használjunk.
6. Main Quest hub NPC-k ne legyenek random patrolon.
7. Class trainerek mindig könnyen megtalálható fix helyen legyenek.
8. NPC death/despawn csak külön quest state-ben történjen.
9. Floor completion ne távolítsa el a régi quest NPC-ket.
10. A Side Questek a Floor teljesítése után is elérhetők maradnak, ha narratívan nincs kizáró ok.
