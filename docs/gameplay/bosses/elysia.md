---
title: Elysia Bosses
---

# Elysia — Bosses

**Balance:** Initial Balance

---

## Kőállkapocs

**Boss ID:** `BOSS-E01-OPT-01`  
**Type:** Optional Mini-Boss  
**Required for Floor Progression:** No  
**Zone:** Old Trial Mine  
**Recommended Player Level:** 2–3  
**Recommended Group:** 1–3  
**Respawn:** 8 minutes after death, subject to layer rules  
**Quest:** SQ-E02

### Base Stats — Solo Baseline

| Stat | Value |
| --- | ---: |
| HP | 1,350 |
| Armor | 24 |
| Magic Resistance | 10 |
| Basic Damage | 18–26 |
| Move Speed | 90% |

### Scaling

For each additional eligible party member in the encounter:

- HP +55%
- Damage +12%
- Add spawn chance +10%

Cap initial scaling at 3 players for this mini-boss.

### Abilities

#### Stone Charge

**Cooldown:** 10 sec  
**Cast:** 1.2 sec telegraph  
**Effect:** frontális roham, 32–42 physical damage.

Ha falnak ütközik:

- Kőállkapocs 3 sec Stunned.
- Armor -8 a stun idejére.

#### Crushing Jaw

**Cooldown:** 6 sec  
**Effect:** 26–34 physical damage.

#### Falling Stone

60% HP alatt aktív.

Stone Charge falnak ütközésekor 2 kisebb törmelékzóna keletkezik.

**Damage:** 12–18 physical.

### Encounter Goal

A játékos tanulja meg:

- ne frontálisan üsse folyamatosan;
- használja a boss rohamát ellene;
- pozicionáljon a falhoz képest.

### Personal Loot

| Item | Chance |
| --- | ---: |
| Kőállkapocs-agyar | 65% |
| M-4 kőporos karvédő | 18% |
| 8–16 currency | 100% |

Quest első kill esetén a normál quest reward ettől független.

### Production Notes

- Reuse `MOB-E01-BOAR-03` skeleton.
- 1 unique head/bone-plate mesh sufficient.
- Existing charge animation reused.
- Boss room is open-world mine chamber, not instance.

---

## The Hollow Crown

**Boss ID:** `BOSS-E01-MAIN-01`  
**Type:** Floor 1 Main Boss  
**Required for Floor Progression:** Yes  
**Zone:** Nameless Valley / Threshold  
**Recommended Player Level:** 3+  
**Recommended Group:** 5 players baseline  
**Matchmaking:** No automatic matchmaking  
**Personal Kill Flag:** Required for Floor 2 access  
**Respawn / Reset:** Encounter resets 90 sec after wipe if arena empty  
**Loot Model:** Personal Loot

## Lore Constraint

The Hollow Crown **nem** a történelmi második Kapu Őre.

A Hollow Crown Elysia újratelepülő ökológiai szerepe és a helyi Rewrite Field ismételt találkozásából kialakuló apex Rewritten lény.

Az Őr külön, későbbi történeti entitás.

---

## Base Stats — 5 Player Baseline

| Stat | Value |
| --- | ---: |
| HP | 18,000 |
| Armor | 28 |
| Magic Resistance | 24 |
| Basic Damage | 24–34 |
| Move Speed | 105% |
| Enrage | None in Alpha |

A számok Initial Balance értékek.

---

## Group Scaling

A Boss baseline-ja 5 játékos.

Ha az encounter kevesebb játékossal indul, csak enyhe lefelé skálázás történik; a Boss nem válik valódi solo encounterré.

### 3 players

- HP ×0.72
- Add count ×0.70
- Boss Damage ×0.88

### 4 players

- HP ×0.86
- Add count ×0.85
- Boss Damage ×0.94

### 5 players

- Baseline

### 6+ eligible players

A GDD mentor/catch-up elvéhez igazodva:

- játékosonként HP +28%
- játékosonként Damage +6%
- add wave size +1 minden 2 extra játékos után

Initial hard cap: 10 játékos.

---

# Phase 1 — The Charge

**HP:** 100% → 70%

A Hollow Crown mozgás- és pozicionálás-alapú fázisa.

## Basic Attack — Crowned Gore

**Range:** melee  
**Damage:** 24–34 physical.

## Hollow Charge

**Cooldown:** 12 sec  
**Cast/Telegraph:** 1.5 sec  
**Target:** random non-primary-threat target  
**Effect:** egyenes roham.

- Impact damage: 40–55 physical.
- Knockback.
- Ha a Boss kőoszlopnak ütközik: 2 sec stagger.
- Stagger alatt Armor -6.

## Antler Arc

**Cooldown:** 8 sec  
**Effect:** 120° frontal cone.

**Damage:** 30–42 physical.

### Intended Lesson

- tank/facing;
- spread positioning;
- use environment without making physical-dodge the core combat model.

A cast telegraph után a játékosoknak helyezkedniük kell; az encounter mechanika nem változtatja meg a GDD tab-target hit szabályait.

---

# Phase 2 — The Crowned Gather

**HP:** 70% → 40%

A völgy pereméről Crowned mobok érkeznek.

Nem mágikus summonként jelennek meg; a narratíva szerint a Boss jelenléte vonzza őket.

## Add Wave

Minden 25 másodpercben:

- 2 × Crowned Wolf
- minden második hullámban 1 × Crowned Boar

5-player baseline.

## Field Howl

**Cooldown:** 20 sec  
**Cast:** 2 sec  
**Interruptible:** Yes

Ha sikerül:

- Crowned addok Haste +15%
- Boss Haste +8%
- Duration: 10 sec

## Crowned Mark

Random játékosra kerül.

**Duration:** 8 sec.

A markolt játékos körül az addok threat-bónuszt kapnak.

### Intended Lesson

- target priority;
- interrupt;
- tank/add control;
- healer pressure;
- support value.

---

# Phase 3 — Threshold Resonance

**HP:** 40% → 0%

A Threshold kőoszlopain kékesfehér vonalak jelennek meg.

A Rewrite-lila és a Threshold-fény vizuálisan egyértelműen különbözik.

## Rewrite Surge

**Cooldown:** 18 sec  
**Cast:** 4 sec  
**Interruptible:** Yes

Ha nem szakítják meg:

- party-wide magic damage: 55–70
- 6 sec `Fractured State`
- Magic Resistance -8

## Resonant Pillars

A kör alakú térből 3 kőoszlop aktiválódik egymás után.

Az aktív oszlop mellett álló játékos:

- +20% Magic Resistance Rewrite Surge ellen
- -10% Movement Speed

Ez nem permanens buff; encounter-only aura.

## Broken Crown

20% HP alatt a Hollow Crown csontkoronája megreped.

- Boss basic damage +15%
- Hollow Charge cooldown 9 sec
- Field Howl disabled
- no new add waves after 15% HP

### Intended Lesson

A végső fázis a teljes Floor első mechanikai összegzése:

- positioning;
- interrupt;
- healing;
- add control;
- környezeti olvasás.

---

# Defeat

0% HP-nál:

1. A Hollow Crown összeesik.
2. A lila Rewrite-fény fokozatosan kihuny.
3. A Threshold kékesfehér fénye aktiválódik.
4. Minden eligible player megkapja:
   - `FLOOR_E01_BOSS_KILL = true`
5. Personal Loot roll.
6. MQ-E37 objective update.

A Boss halála **nem** fedi fel Elysia térképének fennmaradó részeit.

---

# Personal Loot — Initial Balance

| Loot | Chance |
| --- | ---: |
| 35–60 currency | 100% |
| Hollow Crown Bone Shard | 65% |
| Crownweave Mantle | 18% |
| Hollow Antler Ring | 12% |
| Seral-Fen Relic | 6% |

First-clear Main Quest reward ettől független:
`Hollow Crown emléktöredék`.

---

# Boss Loot Item IDs

- `ITEM-E01-MAT-005` — Hollow Crown Bone Shard
- `ITEM-E01-ARM-006` — Crownweave Mantle
- `ITEM-E01-ACC-006` — Hollow Antler Ring
- `ITEM-E01-ACC-007` — Seral-Fen Relic

---

# Production Notes

- Base skeleton: stag/deer archetype.
- Unique assets:
  - crown antler mesh;
  - bone-plate shoulder/neck mesh;
  - purple Rewrite material pass;
  - cracked-crown phase variant.
- Threshold uses separate blue-white material.
- No cinematic required for Alpha.
- Encounter arena is world-space controlled boss area.
- Arena lock may be technical, but should visually read as Threshold reaction rather than an arbitrary force field.
- No NPC joins the fight.
- No constructed camp exists around the Threshold.
- Boss room access remains physically discoverable; no global map marker.
