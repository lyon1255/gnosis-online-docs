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
**Recommended Group:** Team  
**Matchmaking:** No automatic matchmaking  
**Personal Kill Flag:** Required for Floor 2 access

> A részletes végleges encounter-spec külön Main Quest/Boss balancing körben készül el.

### Current Design Pillars

1. Charge / positioning.
2. Crowned add management.
3. Threshold reaction phase.
4. Interrupt/block/healing coordination.
5. Personal boss kill progression.

### Lore Constraint

The Hollow Crown nem a történelmi második Kapu Őre.

A két szereplő külön marad.
