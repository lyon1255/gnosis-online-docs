---
title: Elysia Side Quests
---

# Elysia — Side Quests

**Floor:** 1 — Elysia  
**Quest Count:** 16  
**Quest Chains:** 5  
**Required for Main Progression:** No  
**Design Role:** Exploration, world lore, optional combat, optional boss, map discovery

> **Balance státusz:** Initial Balance.

---

## Quest Overview

| ID | Quest | Recommended Level | XP | Currency | Reputation | Chain |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| SQ-E01 | A névtelen csomag | 1 | 80 | 12 | +10 Loeran's Rest | → SQ-E02 |
| SQ-E02 | A fal mögötti járat | 2 | 220 | 30 | +35 Loeran's Rest | End |
| SQ-E03 | A név, amely nincs a kövön | 1 | 90 | 10 | +20 Loeran's Rest | Standalone |
| SQ-E04 | A csatorna alatt | 1 | 110 | 16 | +25 Loeran's Rest | Standalone |
| SQ-E05 | A malom, amely elhallgatott | 1 | 120 | 18 | +15 Loeran's Rest | → SQ-E06 |
| SQ-E06 | A harmadik vízkerék | 2 | 150 | 22 | +15 Loeran's Rest | End |
| SQ-E07 | A levél, amely nem ért haza | 2 | 100 | 12 | +15 Loeran's Rest | → SQ-E08 |
| SQ-E08 | Kőalmás-kert | 2 | 180 | 24 | +20 Loeran's Rest | End |
| SQ-E09 | A lámpa a romok között | 2 | 120 | 16 | +10 Loeran's Rest | → SQ-E10 |
| SQ-E10 | Az őr, aki nem jött le | 2 | 170 | 22 | +20 Loeran's Rest | End |
| SQ-E11 | A két part neve | 2 | 120 | 16 | +10 Loeran's Rest | → SQ-E12 |
| SQ-E12 | Halden túlpartja | 2 | 170 | 20 | +20 Loeran's Rest | End |
| SQ-E13 | Az üres méhes | 1 | 110 | 15 | +15 Loeran's Rest | Standalone |
| SQ-E14 | A háromszor felépített kerítés | 1 | 120 | 18 | +15 Loeran's Rest | Standalone |
| SQ-E15 | A visszatérő vadászösvény | 2 | 150 | 20 | +15 Loeran's Rest | Standalone |
| SQ-E16 | A kő, amely meleg marad | 3 | 230 | 32 | +25 Loeran's Rest | Standalone |

---

# SQ-E01 — A névtelen csomag

**Quest ID:** `SQ-E01`  
**Type:** Side Quest / Discovery  
**Quest Giver:** World Object — Névtelen csomag  
**Related NPC:** Edrin Sael (`NPC-E01-002`), Bran Keld (`NPC-E01-020`)  
**Zone:** Loeran’s Rest  
**Recommended Level:** 1  
**Party:** Solo  
**Repeatable:** No  
**Prerequisite:** Elysia arrival / Loeran's Rest registration  
**Next Quest:** `SQ-E02`

## Quest Text

Loeran fája mögött egy régi Point One-pecséttel lezárt csomag fekszik. A benne található M-4 kulcs egy rég elfalazott próbajárathoz tartozhat.

## Objectives

1. Vedd fel a névtelen csomagot.
2. Vizsgáld meg a régi Point One-pecsétet.
3. Beszélj Edrin Saellel.
4. Nyisd ki a csomagot.
5. Szerezd meg az `M-4 kulcsot`.
6. Beszélj Bran Kelddel.
7. Vizsgáld meg a Loeran’s Rest keleti falán lévő régi falazást.

## Rewards

**XP:** 80  
**Currency:** 12  
**Reputation:** +10 Loeran's Rest  
**Quest Item Unlock:** [M-4 kulcs](../items/elysia.md#m-4-kulcs)  
**Unlock:** `SQ-E02`

## Developer Notes

- A csomag world objectként spawnol.
- Quest acceptance történhet az item felvételekor.
- Edrin és Bran nem mozog.
- A fal csak a quest aktív állapotában kap interact targetet.
- Az M-4 kulcs Character-Bound Quest Item.

---

# SQ-E02 — A fal mögötti járat

**Quest ID:** `SQ-E02`  
**Type:** Side Quest / Exploration / Optional Boss  
**Quest Giver:** Bran Keld (`NPC-E01-020`)  
**Zone:** Loeran’s Rest / Old Trial Mine  
**Recommended Level:** 2  
**Party:** Solo / 1–3 recommended for boss  
**Repeatable:** No  
**Prerequisite:** `SQ-E01`  
**Boss:** [Kőállkapocs](../bosses/elysia.md#koallkapocs)

## Quest Text

Az M-4 kulcs megnyitja Point One régi próbajáratának negyedik szakaszát. Bran Keld szerint Odran Keln feljegyzései még odalent lehetnek.

## Objectives

1. Menj a régi próbajárat befalazott bejáratához.
2. Távolíts el 3 rögzítőéket.
3. Nyisd meg a járatot.
4. Fedezd fel az M-1 jelű szakaszt.
5. Fedezd fel az M-2 jelű szakaszt.
6. Fedezd fel az M-3 jelű szakaszt.
7. Használd az M-4 kulcsot.
8. Helyezd az M-4 mérődobozt a fali tartóba.
9. Olvasd el Odran Keln feljegyzéseit.
10. Tisztítsd meg a mélyebb járatot.
11. Győzd le Kőállkapcsot.
12. Szerezd meg Odran Keln műszaklistáját.
13. Térj vissza Bran Keldhez.

## Enemy Set

- [Cave Wolf](../enemies/elysia.md#cave-wolf) × 4–6
- [Rewritten Cave Boar](../enemies/elysia.md#rewritten-cave-boar) × 2–3
- [Kőállkapocs](../bosses/elysia.md#koallkapocs) × 1

## Rewards

**XP:** 220  
**Currency:** 30  
**Reputation:** +35 Loeran's Rest  

**Guaranteed:**
- [Bányász megerősített kesztyűje](../items/elysia.md#banyasz-megerositett-kesztyuje)
- [Odran Keln műszaklistája](../items/elysia.md#odran-keln-muszaklistaja)

**Boss Personal Loot:**
- [Kőállkapocs-agyar](../items/elysia.md#koallkapocs-agyar)
- Rare chance: [M-4 kőporos karvédő](../items/elysia.md#m-4-koporos-karvedo)

## Unlocks

- Old Trial Mine exploration area remains accessible.
- Kőállkapocs becomes replayable as optional boss.
- Bran Keld post-quest dialogue.

## Developer Notes

- Mine can be open-world interior; no instance required for Alpha.
- Kőállkapocs reuses boar skeleton/animation.
- Quest completion does not require boss loot roll; boss kill flag is enough.
- Boss personal loot is independent from quest reward.

---

# SQ-E03 — A név, amely nincs a kövön

**Quest ID:** `SQ-E03`  
**Type:** Side Quest / Lore / Choice  
**Quest Giver:** Mera Voss (`NPC-E01-021`)  
**Zone:** Loeran’s Rest  
**Recommended Level:** 1  
**Party:** Solo  
**Repeatable:** No

## Objectives

1. Beszélj Mera Vosszal Loeran fájánál.
2. Vedd át Ellen Voss emlékkövét.
3. Beszélj Illa Orinnal.
4. Vizsgálj meg 4 régi Ledger-kötetet.
5. Találd meg Ellen Voss nevét a túlélőlistán.
6. Térj vissza Merához.
7. **Choice:** Add vissza a követ Merának **vagy** helyezd el az eltűntek emlékfalán.

## Rewards

**XP:** 90  
**Currency:** 10  
**Reputation:** +20 Loeran's Rest  
**Item:** [Régi Ledger-jelző](../items/elysia.md#regi-ledger-jelzo)

## Choice State

`SQE03_STONE_RETURNED` vagy `SQE03_STONE_MEMORIAL`

A world state nem változik globálisan; csak Mera későbbi dialógusa.

---

# SQ-E04 — A csatorna alatt

**Quest ID:** `SQ-E04`  
**Type:** Side Quest / Interact / Combat  
**Quest Giver:** Perrin Orin (`NPC-E01-022`)  
**Supporting NPC:** Lessa Vren (`NPC-E01-023`)  
**Zone:** Loeran’s Rest Sewers  
**Recommended Level:** 1  
**Party:** Solo  
**Repeatable:** No

## Objectives

1. Beszélj Perrin Orinnal.
2. Nyisd fel az alsó utcai csatornafedőt.
3. Vizsgáld meg az első ellenőrzőrostélyt.
4. Tisztítsd ki a második rostélyt.
5. Ölj meg 3 Sewer Vermint.
6. Találd meg a régi vízgyűjtő kamrát.
7. Aktiváld a piros zsilipkart.
8. Ellenőrizd a víz irányát.
9. Térj vissza Perrinhez.

## Rewards

**XP:** 110  
**Currency:** 16  
**Reputation:** +25 Loeran's Rest  
**Item:** [Vízzáró csuklóvédő](../items/elysia.md#vizzaro-csuklovedo)

## Developer Notes

- Lessa nem escort.
- Voice/text instructions can come through fixed pipe interaction or quest text.
- Sewer Vermin uses small animal archetype.

---

# SQ-E05 — A malom, amely elhallgatott

**Quest ID:** `SQ-E05`  
**Type:** Side Quest / Rescue / Interact  
**Quest Giver:** Halen Marr (`NPC-E01-007`)  
**Zone:** Southern Mill Road  
**Recommended Level:** 1  
**Party:** Solo  
**Next Quest:** `SQ-E06`

## Objectives

1. Beszélj Halen Marral.
2. Fedezd fel a régi kisegítőmalmot.
3. Találd meg Soren Vale-t.
4. Vizsgáld meg a vízkereket.
5. Zárd el a felső zsilipet.
6. Menj le a vízjáratba.
7. Találd meg Tira Marrt.
8. Szabadítsd ki a tengelyt a gyökerekből és hordalékból.
9. Indítsd újra a vízkereket.
10. Beszélj Tirával a harmadik vízkerékről.

## Rewards

**XP:** 120  
**Currency:** 18  
**Reputation:** +15 Loeran's Rest  
**Item:** [Molnár úti kenyere](../items/elysia.md#molnar-uti-kenyere) ×3  
**Unlock:** `SQ-E06`

---

# SQ-E06 — A harmadik vízkerék

**Quest ID:** `SQ-E06`  
**Type:** Side Quest / Exploration / Lore  
**Quest Giver:** Tira Marr (`NPC-E01-025`)  
**Zone:** Southern Grove  
**Recommended Level:** 2  
**Party:** Solo  
**Prerequisite:** `SQ-E05`

## Objectives

1. Kövesd a régi kőcsatornát.
2. Találd meg a föld alá futó szakaszt.
3. Haladj tovább a déli ligetbe.
4. Fedezd fel a harmadik vízkereket.
5. Vizsgáld meg a régi lisztesládákat.
6. Olvasd el Meral Tonn naplóját.
7. Találd meg a rókalyukat.
8. Térj vissza Tira Marrhoz.

## Rewards

**XP:** 150  
**Currency:** 22  
**Reputation:** +15 Loeran's Rest  
**Item:** [Meral Tonn naplómásolata](../items/elysia.md#meral-tonn-naplomasolata)

## Developer Notes

- No mandatory combat.
- Strong Fog-of-War exploration quest.
- Fox is neutral ambient creature.

---

# SQ-E07 — A levél, amely nem ért haza

**Quest ID:** `SQ-E07`  
**Type:** Side Quest / Found Item  
**Quest Giver:** World Item — Derr Voss levele  
**Related NPC:** Ressa Voss (`NPC-E01-026`)  
**Recommended Level:** 2  
**Next Quest:** `SQ-E08`

## Objectives

1. Vedd fel Derr Voss levelét.
2. Olvasd el.
3. Keresd meg Ressa Vosst Loeran’s Restben.
4. Add át a levelet.
5. Kérdezz rá Kőalmás-kertre.

## Rewards

**XP:** 100  
**Currency:** 12  
**Reputation:** +15 Loeran's Rest  
**Item:** [Ressa útleírása](../items/elysia.md#ressa-utleirasa)  
**Unlock:** `SQ-E08`

---

# SQ-E08 — Kőalmás-kert

**Quest ID:** `SQ-E08`  
**Type:** Side Quest / Exploration / Combat / Choice  
**Quest Giver:** Ressa Voss  
**Zone:** Northeastern Orchard Valley  
**Recommended Level:** 2  
**Prerequisite:** `SQ-E07`

## Objectives

1. Találd meg a két fehér sziklát.
2. Kövesd a vörös talajt.
3. Fedezd fel Kőalmás-kertet.
4. Vizsgáld meg Derr és Ressa régi jelét.
5. Ölj meg 3 Rewritten Boart.
6. Találd meg Derr elásott fémdobozát.
7. Vedd fel a 2 kőalma-magot.
8. Térj vissza Ressához.
9. **Choice:** Ültesd el a magot Loeran’s Restben **vagy** hagyd Kőalmás-kertben.

## Rewards

**XP:** 180  
**Currency:** 24  
**Reputation:** +20 Loeran's Rest  
**Item:** [Kőalma-szalag](../items/elysia.md#koalma-szalag)

---

# SQ-E09 — A lámpa a romok között

**Quest ID:** `SQ-E09`  
**Type:** Side Quest / Found Object / Exploration  
**Quest Giver:** World Object — Rusted Watchbox  
**Zone:** Second Stake → Southern Ruin  
**Recommended Level:** 2  
**Next Quest:** `SQ-E10`

## Objectives

1. Nyisd ki a rozsdás fémdobozt.
2. Olvasd el Lorn Dain őrnaplóját.
3. Vedd fel Varek Sael kulcsát.
4. Keresd meg a déli romot.
5. Vizsgáld meg az égő olajlámpát.
6. Kutass át 2 romszobát.
7. Találd meg Varek Sael nevét a falon.
8. Fedezd fel a déli sziklaösvényt.

## Rewards

**XP:** 120  
**Currency:** 16  
**Reputation:** +10 Loeran's Rest  
**Item:** [Régi őrlámpa](../items/elysia.md#regi-orlampa)  
**Unlock:** `SQ-E10`

---

# SQ-E10 — Az őr, aki nem jött le

**Quest ID:** `SQ-E10`  
**Type:** Side Quest / Exploration / Lore Hint  
**Quest Giver:** Discovery — Varek Sael  
**Zone:** Southern Plateau  
**Recommended Level:** 2  
**Prerequisite:** `SQ-E09`

## Objectives

1. Kövesd a déli sziklaösvényt.
2. Találd meg Varek Sael kunyhóját.
3. Beszélj Varekkel.
4. Vizsgáld meg a fennsík 3 megfigyelési pontját.
5. Másold le Varek Field-jelöléseit.
6. Térj vissza Varekhez.

## Rewards

**XP:** 170  
**Currency:** 22  
**Reputation:** +20 Loeran's Rest  
**Item:** [Varek megfigyelési lapja](../items/elysia.md#varek-megfigyelesi-lapja)

## Main Lore Hint

A déli irányból is érkeznek Rewritten mozgások. Nem mutatja a Hollow Crown helyét, csak szélesíti a Field-mintázatot.

---

# SQ-E11 — A két part neve

**Quest ID:** `SQ-E11`  
**Type:** Side Quest / Investigation  
**Quest Giver:** Nessa Keln (`NPC-E01-028`)  
**Supporting NPC:** Jarek Dorr (`NPC-E01-027`)  
**Zone:** Old Ferry Crossing  
**Recommended Level:** 2  
**Next Quest:** `SQ-E12`

## Objectives

1. Vizsgáld meg a `HALDEN` feliratot az első parton.
2. Kelj át a folyón.
3. Vizsgáld meg a második `HALDEN` feliratot.
4. Menj 300 lépést északra.
5. Találd meg a kőrakást.
6. Vedd fel H. Venn csengőjét.
7. Beszélj Jarek Dorral.

## Rewards

**XP:** 120  
**Currency:** 16  
**Reputation:** +10 Loeran's Rest  
**Item:** [Halden csengője](../items/elysia.md#halden-csengoje)  
**Unlock:** `SQ-E12`

---

# SQ-E12 — Halden túlpartja

**Quest ID:** `SQ-E12`  
**Type:** Side Quest / Exploration / Environmental Story  
**Quest Giver:** Jarek Dorr  
**Zone:** Northern Reedbank  
**Recommended Level:** 2  
**Prerequisite:** `SQ-E11`

## Objectives

1. Haladj északra a folyó túlpartján.
2. Fedezd fel a nádmezőt.
3. Találd meg a régi csónakroncsot.
4. Vizsgáld meg a `HALDEN` feliratot.
5. Vedd fel H. Venn övcsatját.
6. Olvasd el a megmaradt naplólapot.
7. Találd meg az északi gázlót.
8. Vizsgáld meg a 4 régi sírjelet.
9. Térj vissza Jarekhez.

## Rewards

**XP:** 170  
**Currency:** 20  
**Reputation:** +20 Loeran's Rest  
**Item:** [Révész övcsatja](../items/elysia.md#revesz-ovcsatja)

---

# SQ-E13 — Az üres méhes

**Quest ID:** `SQ-E13`  
**Type:** Side Quest / Gather / Exploration  
**Quest Giver:** Neral Thael (`NPC-E01-030`)  
**Zone:** Northern Meadows  
**Recommended Level:** 1

## Objectives

1. Beszélj Neral Thaellel.
2. Vizsgálj meg 3 üres kaptárt.
3. Találd meg a vadméhek új odúját.
4. Gyűjts 3 megfelelő faanyagot.
5. Javíts meg 1 kaptárt.
6. Térj vissza Neralhoz.

## Rewards

**XP:** 110  
**Currency:** 15  
**Reputation:** +15 Loeran's Rest  
**Item:** [Elysiai mézviasz](../items/elysia.md#elysiai-mehviasz) ×2

---

# SQ-E14 — A háromszor felépített kerítés

**Quest ID:** `SQ-E14`  
**Type:** Side Quest / Defend / Interact  
**Quest Giver:** Beren Kadd (`NPC-E01-031`)  
**Zone:** Southwestern Farms  
**Recommended Level:** 1

## Objectives

1. Beszélj Beren Kaddal.
2. Vizsgáld meg a kerítés 3 gyenge pontját.
3. Javítsd meg mindhármat.
4. Védd meg a farmot 2 vaddisznó-hullámtól.
5. Keresd meg a régi Point One-i kőalapokat.
6. Jelöld ki az új kerítés nyomvonalát.
7. Beszélj Berennel.

## Rewards

**XP:** 120  
**Currency:** 18  
**Reputation:** +15 Loeran's Rest  
**Item:** [Gazda bőrkarvédője](../items/elysia.md#gazda-borkarvedoje)

---

# SQ-E15 — A visszatérő vadászösvény

**Quest ID:** `SQ-E15`  
**Type:** Side Quest / Tracking / Ambient Warning  
**Quest Giver:** Coll Marr (`NPC-E01-013`)  
**Zone:** Northwestern Woods  
**Recommended Level:** 2

## Objectives

1. Beszélj Coll Marral.
2. Kövesd a régi vadászösvényt.
3. Vizsgáld meg 4 állatnyom-csomópontot.
4. Találd meg, hol válik ketté az ösvény.
5. Fedezd fel a sziklamezőt.
6. Lépj be a kopár folt peremére.
7. Figyeld meg az ambient hang változását.
8. Térj vissza Collhoz.

## Rewards

**XP:** 150  
**Currency:** 20  
**Reputation:** +15 Loeran's Rest  
**Item:** [Vadász jelzőszalag](../items/elysia.md#vadasz-jelzoszalag)

## Developer Notes

- No explicit UI warning required.
- Audio state should fade birds/insects near saturation zone.
- Quest objective completes by entering trigger + dwell time.

---

# SQ-E16 — A kő, amely meleg marad

**Quest ID:** `SQ-E16`  
**Type:** Side Quest / High-Risk Exploration / Lore Hint  
**Quest Giver:** Varo Keln (`NPC-E01-032`)  
**Supporting NPC:** Tessa Ormin (`NPC-E01-012`)  
**Zone:** Far Eastern Ridge  
**Recommended Level:** 3  
**Party:** Solo possible / 2 recommended

## Objectives

1. Beszélj Varo Kelnel és Tessa Orinnal.
2. Találd meg a két lapos kőtornyot.
3. Haladj át a keskeny sziklaátjárón.
4. Vizsgálj meg 3 kőmintát.
5. Győzz le 4 Rewritten ellenséget a környéken.
6. Találd meg a kékesfehér fényű repedést.
7. Vegyél mintát a repedés mellől.
8. Térj vissza Tessához.

## Rewards

**XP:** 230  
**Currency:** 32  
**Reputation:** +25 Loeran's Rest  
**Item:** [Meleg kőszilánk](../items/elysia.md#meleg-koszilank)
**Item:** [Keleti mérőköpeny](../items/elysia.md#keleti-merokopeny)

## Lore Flag

`ELY_THRESHOLD_PREHINT_01`

Ez később extra dialógust nyithat a Threshold felfedezésekor.

---

# NPC Implementation Index

| NPC ID | NPC | Default Location |
| --- | --- | --- |
| NPC-E01-002 | Edrin Sael | Loeran’s Rest — Loeran fája |
| NPC-E01-020 | Bran Keld | Loeran’s Rest — keleti fal |
| NPC-E01-021 | Mera Voss | Loeran’s Rest — főtér |
| NPC-E01-022 | Perrin Orin | Loeran’s Rest — alsó utca |
| NPC-E01-023 | Lessa Vren | Loeran’s Rest — alsó utca |
| NPC-E01-007 | Halen Marr | Marrin-farm |
| NPC-E01-024 | Soren Vale | Old Mill |
| NPC-E01-025 | Tira Marr | Old Mill |
| NPC-E01-026 | Ressa Voss | Loeran’s Rest — szabóműhely |
| NPC-E01-027 | Jarek Dorr | Old Ferry Crossing |
| NPC-E01-028 | Nessa Keln | Old Ferry Crossing |
| NPC-E01-029 | Varek Sael | Southern Plateau |
| NPC-E01-030 | Neral Thael | Loeran’s Rest — északi piac |
| NPC-E01-031 | Beren Kadd | Southwestern Farm |
| NPC-E01-013 | Coll Marr | Loeran’s Rest / hunting edge |
| NPC-E01-012 | Tessa Ormin | Field measuring station |
| NPC-E01-032 | Varo Keln | Loeran’s Rest — measuring station |

---

# Implementation Rules

- Quest reward items are server-authoritative.
- Quest items are Character-Bound unless explicitly stated otherwise.
- Side Quest abandonment clears objective progress but does not permanently destroy reusable world objects.
- Completed one-time Side Quests cannot be repeated.
- Optional boss remains replayable independently of quest completion.
- Personal Loot applies to optional boss loot.
- Side Quest rewards are intentionally below Main Quest progression rewards.
- Exact XP/currency numbers are Initial Balance.
