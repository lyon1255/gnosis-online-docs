---
title: Elysia Main Quests — Gameplay
---

# Elysia — Main Quest

**Floor:** 1 — Elysia  
**Quest Count:** 37  
**Required for Floor Progression:** Yes  
**Final Required Boss:** The Hollow Crown  
**Map Rule:** Loeran’s Rest map is granted; outside the city Fog of War clears only through physical exploration  
**Boss Navigation Rule:** No direct Boss marker

> **Balance státusz:** Initial Balance.  
> Az XP-, currency-, Reputation-, HP-, damage- és item-stat értékek implementálható kezdőértékek, nem végleges balansz.

---

# Main Quest Flow

| ID | Quest | Recommended Level | XP | Currency | Reputation |
| --- | --- | ---: | ---: | ---: | ---: |
| MQ-E01 | A másik levegő | 1 | 50 | 0 | +5 Loeran's Rest |
| MQ-E02 | A helyi Főkönyv | 1 | 70 | 5 | +10 Loeran's Rest |
| MQ-E03 | Loeran neve | 1 | 60 | 0 | +10 Loeran's Rest |
| MQ-E04 | A város szélén | 1 | 90 | 10 | +10 Loeran's Rest |
| MQ-E05 | Keserűlevél | 1 | 100 | 12 | +10 Loeran's Rest |
| MQ-E06 | Az első új lecke | 1 | 120 | 10 | +15 Loeran's Rest |
| MQ-E07 | A térkép széle | 1 | 110 | 12 | +10 Loeran's Rest |
| MQ-E08 | E-17 | 1 | 120 | 14 | +10 Loeran's Rest |
| MQ-E09 | A régi út | 1 | 140 | 16 | +10 Loeran's Rest |
| MQ-E10 | Friss nyom | 2 | 150 | 18 | +15 Loeran's Rest |
| MQ-E11 | Tessa állomása | 2 | 150 | 18 | +15 Loeran's Rest |
| MQ-E12 | Három mérés | 2 | 170 | 20 | +15 Loeran's Rest |
| MQ-E13 | A csönd első helye | 2 | 170 | 20 | +15 Loeran's Rest |
| MQ-E14 | Három név | 2 | 180 | 22 | +20 Loeran's Rest |
| MQ-E15 | Amíg a nyom tart | 2 | 200 | 24 | +20 Loeran's Rest |
| MQ-E16 | A Korona jele | 2 | 210 | 24 | +20 Loeran's Rest |
| MQ-E17 | Három jelentés | 2 | 220 | 26 | +20 Loeran's Rest |
| MQ-E18 | Második Cölöp | 2 | 230 | 28 | +20 Loeran's Rest |
| MQ-E19 | A törött út | 2 | 220 | 26 | +15 Loeran's Rest |
| MQ-E20 | Másik átkelés | 2 | 240 | 30 | +20 Loeran's Rest |
| MQ-E21 | A keleti gazdaságok | 2 | 250 | 30 | +20 Loeran's Rest |
| MQ-E22 | Nima farmja | 2 | 260 | 32 | +20 Loeran's Rest |
| MQ-E23 | Nem egy | 2 | 260 | 32 | +20 Loeran's Rest |
| MQ-E24 | A csend ujja | 3 | 280 | 34 | +25 Loeran's Rest |
| MQ-E25 | Nima Orin | 3 | 300 | 36 | +30 Loeran's Rest |
| MQ-E26 | A három jel | 3 | 300 | 36 | +25 Loeran's Rest |
| MQ-E27 | Koronás vad | 3 | 320 | 38 | +25 Loeran's Rest |
| MQ-E28 | Seral-Fen | 3 | 320 | 38 | +25 Loeran's Rest |
| MQ-E29 | Az ismétlődő szerep | 3 | 340 | 40 | +30 Loeran's Rest |
| MQ-E30 | A víz | 3 | 300 | 36 | +20 Loeran's Rest |
| MQ-E31 | A táplálkozóhely | 3 | 300 | 36 | +20 Loeran's Rest |
| MQ-E32 | A fekvőhely | 3 | 320 | 38 | +25 Loeran's Rest |
| MQ-E33 | A fal, amely lélegzik | 3 | 350 | 42 | +30 Loeran's Rest |
| MQ-E34 | A névtelen völgy | 3 | 380 | 45 | +35 Loeran's Rest |
| MQ-E35 | Mindig legyen visszaút | 3 | 360 | 42 | +30 Loeran's Rest |
| MQ-E36 | A Hollow Crown | 3 | 400 | 50 | +40 Loeran's Rest |
| MQ-E37 | A Küszöb | 3 | 650 | 90 | +75 Loeran's Rest |

---

# MQ-E01 — A másik levegő

**Quest ID:** `MQ-E01`  
**Type:** Main Quest / Arrival  
**Quest Giver:** Tarel Venn (`NPC-E01-001`)  
**Zone:** Elysia West Gate  
**Recommended Level:** 1  
**Party:** Solo  
**Repeatable:** No  
**Prerequisite:** Brink Valley tutorial complete

## Quest Text

A játékos átlépett a Kapun Elysiába. Tarel Venn, a Nyugati Kapuőrség tagja ellenőrzi az átkelési engedélyt és Loeran’s Rest helyi nyilvántartásához irányítja.

## Objectives

1. Beszélj Tarel Vennnel.
2. Add át az átkelési engedélyt.
3. Kövesd a kövezett utat Loeran’s Rest főteréig.
4. Fedezd fel a Kalandorügyi Hivatalt.

## Rewards

**XP:** 50  
**Currency:** 0  
**Reputation:** +5 Loeran's Rest

## Unlocks

- Loeran’s Rest safe zone
- Loeran’s Rest services
- `MQ-E02`

## Developer Notes

- Tarel fix NPC.
- No escort.
- Gate cannot be looked through in either direction.
- The city path is safe.

---

# MQ-E02 — A helyi Főkönyv

**Quest ID:** `MQ-E02`  
**Quest Giver:** Illa Orin (`NPC-E01-003`)  
**Zone:** Loeran’s Rest  
**Recommended Level:** 1  
**Prerequisite:** `MQ-E01`

## Objectives

1. Beszélj Illa Orinnal.
2. Add át az ideiglenes Kalandor-engedélyt.
3. Erősítsd meg a karakter nevét.
4. Vedd át a végleges Kalandor-jelvényt.
5. Vedd át Loeran’s Rest városi térképét.
6. Nyisd meg a Map UI-t.

## Rewards

**XP:** 70  
**Currency:** 5  
**Reputation:** +10 Loeran's Rest  
**Guaranteed Items:**
- [Kalandor-jelvény](../items/elysia.md#kalandor-jelveny)
- [Loeran’s Rest városi térképe](../items/elysia.md#loerans-rest-varosi-terkepe)

## Map Rule

A térkép kizárólag Loeran’s Restet fedi fel.  
A városon kívül a Fog of War érintetlen marad.

---

# MQ-E03 — Loeran neve

**Quest ID:** `MQ-E03`  
**Quest Giver:** Illa Orin  
**Related NPC:** Edrin Sael (`NPC-E01-002`)  
**Zone:** Loeran’s Rest főtere  
**Recommended Level:** 1

## Objectives

1. Menj Loeran fájához.
2. Vizsgáld meg a névtelen követ.
3. Beszélj Edrin Saellel.
4. Interact: mondd ki Loeran nevét háromszor.
5. Térj vissza Illa Orinhoz.

## Rewards

**XP:** 60  
**Currency:** 0  
**Reputation:** +10 Loeran's Rest  
**Lore Flag:** `LOERAN_TREE_VISITED`

## Developer Notes

- No buff.
- No hidden power.
- This is narrative onboarding only.

---

# MQ-E04 — A város szélén

**Quest ID:** `MQ-E04`  
**Quest Giver:** Maren Dorr (`NPC-E01-004`)  
**Zone:** Loeran’s Rest / Marrin-farm  
**Recommended Level:** 1

## Objectives

1. Beszélj Maren Dorrral.
2. Menj a Marrin-farmhoz.
3. Beszélj Halen Marral (`NPC-E01-007`).
4. Vizsgáld meg a keserűlevél növényt.
5. Fedezd fel a farm nyugati gyümölcsösét.

## Rewards

**XP:** 90  
**Currency:** 10  
**Reputation:** +10 Loeran's Rest

---

# MQ-E05 — Keserűlevél

**Quest ID:** `MQ-E05`  
**Quest Giver:** Halen Marr  
**Turn-in:** Sera Thael (`NPC-E01-008`)  
**Recommended Level:** 1

## Objectives

1. Gyűjts 6 ép keserűlevelet.
2. Ne szedd le a foltos növényeket.
3. Vidd a leveleket Sera Thaelhez.
4. Törd össze a leveleket.
5. Keverd össze az olajjal.
6. Vedd át a terepi kenőcsöt.

## Rewards

**XP:** 100  
**Currency:** 12  
**Reputation:** +10 Loeran's Rest  
**Item:** [Terepi keserűkenőcs](../items/elysia.md#terepi-keserukenocs) ×2

---

# MQ-E06 — Az első új lecke

**Quest ID:** `MQ-E06`  
**Quest Giver:** Sera Thael  
**Zone:** Loeran’s Rest Class Hall  
**Recommended Level:** 1

## Quest Text

Sera a játékost a saját class-mesteréhez küldi. Ez az első olyan képzés, amely Brink Valleyben még nem volt elérhető.

## Objectives

1. Keresd meg a classod mesterét.
2. Beszélj vele.
3. Teljesítsd az első class-gyakorlatot.
4. Tanuld meg az első új class-képességet.
5. Használd a képességet 3 alkalommal a gyakorlócélponton.

## Class Trainers

| Class | NPC |
| --- | --- |
| Warrior | Dorran Kadd (`NPC-E01-005`) |
| Assassin | Vessa Marr (`NPC-E01-006`) |
| Mage | Fen Orin (`NPC-E01-009`) |
| Ranger | Telan Thael (`NPC-E01-010`) |
| Cleric | Mira Venn (`NPC-E01-011`) |
| Adept | Saar Keln (`NPC-E01-014`) |

## Rewards

**XP:** 120  
**Currency:** 10  
**Reputation:** +15 Loeran's Rest  
**Unlock:** first Elysia class skill

## Developer Notes

- Exact spell IDs belong in Class Gameplay docs.
- Trainer reminds player: return after each level-up.
- No specialization choice required here unless later class design says otherwise.

---

# MQ-E07 — A térkép széle

**Quest ID:** `MQ-E07`  
**Quest Giver:** Maren Dorr  
**Zone:** Loeran’s Rest East Gate  
**Recommended Level:** 1

## Objectives

1. Beszélj Marennel.
2. Nyisd meg a városi térképet.
3. Menj a keleti kapuig.
4. Lépj Loeran’s Rest térképezett határán kívülre.
5. Figyeld meg, hogy a Fog of War csak a bejárt területet fedi fel.

## Rewards

**XP:** 110  
**Currency:** 12  
**Reputation:** +10 Loeran's Rest

## Unlock

- Open-world map exploration tutorial complete
- `MQ-E08`

---

# MQ-E08 — E-17

**Quest ID:** `MQ-E08`  
**Quest Giver:** Maren Dorr  
**Zone:** East Road  
**Recommended Level:** 1

## Objectives

1. Kövesd a régi keleti utat.
2. Találd meg az első régi útjelzőt.
3. Keresd meg az `E-17` jelzőoszlopot.
4. Vizsgáld meg a rajta lévő friss járőrjelet.
5. Térj vissza Marenhez.

## Rewards

**XP:** 120  
**Currency:** 14  
**Reputation:** +10 Loeran's Rest  
**Item:** [E-17 járőrjel másolata](../items/elysia.md#e-17-jarorjel-masolata)

---

# MQ-E09 — A régi út

**Quest ID:** `MQ-E09`  
**Quest Giver:** Maren Dorr  
**Zone:** Old Marrin Road  
**Recommended Level:** 1

## Objectives

1. Fedezd fel a régi szekérutat.
2. Vizsgáld meg a kidőlt szekeret.
3. Vizsgáld meg az elhagyott őrbódét.
4. Fedezd fel a régi útkereszteződést.
5. Győzz le minden ellenséget, amely közvetlenül lezárja az utat.

## Enemy Set

- [Normal Wolf](../enemies/elysia.md#normal-wolf)
- [Normal Boar](../enemies/elysia.md#normal-boar)

## Rewards

**XP:** 140  
**Currency:** 16  
**Reputation:** +10 Loeran's Rest

---

# MQ-E10 — Friss nyom

**Quest ID:** `MQ-E10`  
**Quest Giver:** Discovery  
**Turn-in:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Vizsgáld meg az út mellett fekvő elpusztult farkast.
2. Vizsgáld meg a hátsó lábat.
3. Vizsgáld meg a bordák közötti lila szövetet.
4. Vizsgáld meg a talajon lévő nyomokat.
5. Jelentsd Marennek, hogy a nyomok kelet felől érkeztek.

## Rewards

**XP:** 150  
**Currency:** 18  
**Reputation:** +15 Loeran's Rest  
**Lore Flag:** `REWRITTEN_MOVING_WEST_CONFIRMED`

---

# MQ-E11 — Tessa állomása

**Quest ID:** `MQ-E11`  
**Quest Giver:** Maren Dorr  
**Target NPC:** Tessa Ormin (`NPC-E01-012`)  
**Recommended Level:** 2

## Objectives

1. Találd meg a száraz kutat.
2. Haladj északkelet felé.
3. Találd meg a kettétört fehér nyárfát.
4. A nyárfánál fordulj balra.
5. Fedezd fel Tessa Ormin mérőállomását.
6. Beszélj Tessával.

## Rewards

**XP:** 150  
**Currency:** 18  
**Reputation:** +15 Loeran's Rest

## Developer Notes

- No direct waypoint beyond the last known landmark.
- Quest text stores directions.

---

# MQ-E12 — Három mérés

**Quest ID:** `MQ-E12`  
**Quest Giver:** Tessa Ormin  
**Recommended Level:** 2

## Objectives

1. Vedd át a Field-mérőt.
2. Mérj a kidőlt tölgy mellett.
3. Mérj a sekély tónál.
4. Mérj a kopár folt peremén.
5. Térj vissza Tessához.
6. Add át a három mérést.

## Rewards

**XP:** 170  
**Currency:** 20  
**Reputation:** +15 Loeran's Rest  
**Quest Item:** [Tessa hordozható Field-mérője](../items/elysia.md#tessa-hordozhato-field-meroje)

---

# MQ-E13 — A csönd első helye

**Quest ID:** `MQ-E13`  
**Quest Giver:** Tessa Ormin  
**Recommended Level:** 2

## Objectives

1. Térj vissza a kopár folthoz.
2. Maradj a peremén 10 másodpercig.
3. Figyeld meg az ambient hang csökkenését.
4. Lépj be a területre.
5. Vegyél új Field-mérést.
6. Térj vissza Tessához.

## Rewards

**XP:** 170  
**Currency:** 20  
**Reputation:** +15 Loeran's Rest  
**Lore Flag:** `AMBIENT_WARNING_TUTORIAL_COMPLETE`

---

# MQ-E14 — Három név

**Quest ID:** `MQ-E14`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Quest Text

Derr Voss, Leth Sael és Nima Orin nem tért vissza a heti járőrből.

## Objectives

1. Vedd át a járőr utolsó ismert útvonalát.
2. Menj a régi malomromhoz.
3. Találd meg Derr Voss elhagyott zsákját.
4. Találd meg Leth Sael törött nyílvesszőjét.
5. Találd meg Nima Orin üres mérőtokját.

## Rewards

**XP:** 180  
**Currency:** 22  
**Reputation:** +20 Loeran's Rest

---

# MQ-E15 — Amíg a nyom tart

**Quest ID:** `MQ-E15`  
**Quest Giver:** Discovery continuation  
**Recommended Level:** 2

## Objectives

1. Kövesd a járőr nyomait az erdősávba.
2. Fedezd fel Derr Voss holttestét.
3. Fedezd fel Leth Sael holttestét.
4. Vizsgáld meg a magas karmolásnyomokat a fán.
5. Keresd meg Nima Orin földbe vésett jelét.
6. Másold le a jelképet.
7. Térj vissza Marenhez.

## Rewards

**XP:** 200  
**Currency:** 24  
**Reputation:** +20 Loeran's Rest  
**Item:** [Nima Korona-jelének másolata](../items/elysia.md#nima-korona-jelenek-masolata)

## Side Quest Hook

Derr Vossnál felvehető: `SQ-E07 — A levél, amely nem ért haza`.

---

# MQ-E16 — A Korona jele

**Quest ID:** `MQ-E16`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Beszélj Marennel Nima jeléről.
2. Beszélj Tessával.
3. Vizsgáld meg a jelképet a Field-mérési jegyzőkönyvekkel összevetve.
4. Rögzítsd a jel nevét ideiglenesen `Korona` megjelöléssel.

## Rewards

**XP:** 210  
**Currency:** 24  
**Reputation:** +20 Loeran's Rest  
**Lore Flag:** `CROWN_SYMBOL_REGISTERED`

---

# MQ-E17 — Három jelentés

**Quest ID:** `MQ-E17`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Beszélj Coll Marr vadásszal.
2. Figyeld meg a nyugat felé menekülő szarvascsordát.
3. Beszélj Sella Dorn gazdával (`NPC-E01-015`).
4. Próbáld kelet felé vezetni a két kutyát.
5. Keresd meg az új karmolásokat a jelzőoszlopon.
6. Térj vissza Marenhez.

## Rewards

**XP:** 220  
**Currency:** 26  
**Reputation:** +20 Loeran's Rest

---

# MQ-E18 — Második Cölöp

**Quest ID:** `MQ-E18`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Találd meg a Második Cölöp régi őrhelyét.
2. Keresd meg a kerülő ösvényt a toronyhoz.
3. Juss fel a torony tetejére.
4. Használd a régi távcsövet.
5. Vizsgáld meg a déli füstöt.
6. Vizsgáld meg az északi állatmozgást.
7. Vizsgáld meg a keleti madármentes erdősávot.
8. Jelents Marennek.

## Rewards

**XP:** 230  
**Currency:** 28  
**Reputation:** +20 Loeran's Rest  
**Item:** [Második Cölöp megfigyelési lapja](../items/elysia.md#masodik-colop-megfigyelesi-lapja)

## Side Quest Hook

A toronyban található rozsdás doboz indítja `SQ-E09 — A lámpa a romok között`.

---

# MQ-E19 — A törött út

**Quest ID:** `MQ-E19`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Kövesd a keleti utat a folyóig.
2. Fedezd fel a leszakadt hidat.
3. Vizsgáld meg a híd maradványait.
4. Keress átkelést észak felé.
5. Keress átkelést dél felé.
6. Azonosítsd a régi kompállást mint használható alternatívát.

## Rewards

**XP:** 220  
**Currency:** 26  
**Reputation:** +15 Loeran's Rest

---

# MQ-E20 — Másik átkelés

**Quest ID:** `MQ-E20`  
**Quest Giver:** Jarek Dorr (`NPC-E01-027`)  
**Supporting NPC:** Nessa Keln (`NPC-E01-028`)  
**Recommended Level:** 2

## Objectives

1. Beszélj Jarek Dorrral.
2. Gyűjts 3 erős deszkát a környékről.
3. Gyűjts 2 kötélcsomót.
4. Javítsd meg a komp rögzítését.
5. Aktiváld a kompot.
6. Kelj át a folyón.

## Rewards

**XP:** 240  
**Currency:** 30  
**Reputation:** +20 Loeran's Rest

## Developer Notes

- No escort.
- Jarek/Nessa remain at fixed positions.
- Profession system not required; interactions are quest actions.

---

# MQ-E21 — A keleti gazdaságok

**Quest ID:** `MQ-E21`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 2

## Objectives

1. Fedezd fel az első keleti farmot.
2. Szerezd vissza az első Ledger-táblát.
3. Fedezd fel a második farmot.
4. Szerezd vissza a második Ledger-táblát.
5. Fedezd fel a harmadik farmot.
6. Szerezd vissza a harmadik Ledger-táblát.
7. Vizsgáld meg a családneveket.

## Rewards

**XP:** 250  
**Currency:** 30  
**Reputation:** +20 Loeran's Rest  
**Item:** [Keleti farmok Ledger-táblái](../items/elysia.md#keleti-farmok-ledger-tablai)

---

# MQ-E22 — Nima farmja

**Quest ID:** `MQ-E22`  
**Quest Giver:** Discovery  
**Recommended Level:** 2

## Objectives

1. Azonosítsd Nima Orin családjának farmját.
2. Kutass át 3 helyiséget.
3. Találd meg a friss gyertyát.
4. Találd meg a használt kötést.
5. Találd meg az üres víztartót.
6. Vizsgáld meg a falra karcolt üzenetet.

## Rewards

**XP:** 260  
**Currency:** 32  
**Reputation:** +20 Loeran's Rest  
**Lore Flag:** `NIMA_WAS_HERE`

---

# MQ-E23 — Nem egy

**Quest ID:** `MQ-E23`  
**Quest Giver:** Nima’s wall message / Maren follow-up  
**Recommended Level:** 2

## Objectives

1. Olvasd el: `Nem egy. Követik.`
2. Vizsgáld meg a három eltérő nyomtípust.
3. Határozd meg mindhárom mozgási irányát.
4. Kövesd a nyomokat rövid távolságon.
5. Jelentsd, hogy mind keletről nyugat felé mozog.

## Rewards

**XP:** 260  
**Currency:** 32  
**Reputation:** +20 Loeran's Rest

---

# MQ-E24 — A csend ujja

**Quest ID:** `MQ-E24`  
**Quest Giver:** Tessa Ormin  
**Recommended Level:** 3

## Objectives

1. Kövesd a magasabb Saturation terület szélét.
2. Figyeld meg a ritkuló madárhangot.
3. Figyeld meg a nyugat felé futó farkast.
4. Vizsgáld meg a Rewritten vaddisznót.
5. Érd el a teljesen elcsendesedő pontot.
6. **Retreat:** térj vissza a biztonságos peremre.
7. Térj vissza Tessához.

## Rewards

**XP:** 280  
**Currency:** 34  
**Reputation:** +25 Loeran's Rest

## Developer Notes

- This quest explicitly rewards retreat.
- No failure for leaving the high-Saturation area early after objective completion.

---

# MQ-E25 — Nima Orin

**Quest ID:** `MQ-E25`  
**Quest Giver:** Environmental clue — smoke  
**Recommended Level:** 3

## Objectives

1. Vizsgáld meg a távoli füstöt.
2. Találd meg az elhagyott vízgyűjtőt.
3. Menj le az alsó helyiségbe.
4. Találd meg Nima Orint élve (`NPC-E01-016`).
5. Adj neki vizet.
6. Hallgasd meg a Crowned lényekről szóló jelentését.
7. Jegyezd fel a három tájjelet.
8. Térj vissza Marenhez.
9. Add át Nima pontos helyét a mentőcsapatnak.

## Rewards

**XP:** 300  
**Currency:** 36  
**Reputation:** +30 Loeran's Rest  
**Item:** [Nima terepi vázlata](../items/elysia.md#nima-terepi-vazlata)

## Developer Notes

- No escort implementation.
- Rescue team is off-screen/state-based after report.

---

# MQ-E26 — A három jel

**Quest ID:** `MQ-E26`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3

## Objectives

1. Találd meg a kettős dombot.
2. Találd meg a fehér sziklafalat.
3. Találd meg a száraz folyómedret.
4. Kövesd a száraz medret kelet felé.
5. Fedezd fel az új al-zónát.

## Rewards

**XP:** 300  
**Currency:** 36  
**Reputation:** +25 Loeran's Rest

---

# MQ-E27 — Koronás vad

**Quest ID:** `MQ-E27`  
**Quest Giver:** Discovery  
**Recommended Level:** 3

## Objectives

1. Találj egy Crowned Wolfot.
2. Győzd le.
3. Vizsgáld meg a csontkoronát.
4. Kövesd a visszavonulási nyomait kelet felé.
5. Találd meg legalább 3 másik Crowned állat nyomát.
6. Jelents Marennek és Tessának.

## Enemy

- [Crowned Wolf](../enemies/elysia.md#crowned-wolf)

## Rewards

**XP:** 320  
**Currency:** 38  
**Reputation:** +25 Loeran's Rest  
**Item:** [Crowned csonttöredék](../items/elysia.md#crowned-csonttoredek)

---

# MQ-E28 — Seral-Fen

**Quest ID:** `MQ-E28`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3

## Objectives

1. Találd meg a völgy bejáratánál álló régi őrházat.
2. Fedezd fel a `SERAL-FEN VADREZERVÁTUM` feliratot.
3. Kutass át 3 régi irattartót.
4. Találd meg a nagy hímről szóló jelentést.
5. Találd meg a második, azonos sérülésről szóló jelentést.
6. Vidd vissza a másolatokat Tessának.

## Rewards

**XP:** 320  
**Currency:** 38  
**Reputation:** +25 Loeran's Rest  
**Item:** [Seral-Fen vadászati jelentések](../items/elysia.md#seral-fen-vadaszati-jelentesek)

---

# MQ-E29 — Az ismétlődő szerep

**Quest ID:** `MQ-E29`  
**Quest Giver:** Tessa Ormin  
**Recommended Level:** 3

## Objectives

1. Beszélj Tessával a Seral-Fen jelentésekről.
2. Beszélj Marennel az Elysia-repopulation szabályról.
3. Hasonlítsd össze a régi `nagy hím` leírását a Crowned nyomokkal.
4. Rögzítsd a hipotézist: ugyanaz a szerep újra megjelenik és újra Rewrite-kitettséget kap.

## Rewards

**XP:** 340  
**Currency:** 40  
**Reputation:** +30 Loeran's Rest  
**Lore Flag:** `HOLLOW_CROWN_ORIGIN_HYPOTHESIS`

---

# MQ-E30 — A víz

**Quest ID:** `MQ-E30`  
**Quest Giver:** Tessa Ormin  
**Recommended Level:** 3

## Objectives

1. Keresd meg a rezervátum egyetlen állandó vízforrását.
2. Vizsgálj meg 3 Crowned nyomot.
3. Vegyél Field-mérést.
4. Döntsd el, hogy a Hollow Crown rendszeresen itt tartózkodik-e.
5. Térj vissza Tessához.

## Result

A víz fontos, de nem a Boss elsődleges tartózkodási helye.

## Rewards

**XP:** 300  
**Currency:** 36  
**Reputation:** +20 Loeran's Rest

---

# MQ-E31 — A táplálkozóhely

**Quest ID:** `MQ-E31`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3

## Objectives

1. Találd meg a régi gyümölcsöst.
2. Vizsgáld meg a feltépett kérget.
3. Vizsgáld meg a nagy patanyomokat.
4. Kövesd a nyomokat a terület széléig.
5. Állapítsd meg, hogy a Hollow Crown járt itt, de nem maradt itt.

## Rewards

**XP:** 300  
**Currency:** 36  
**Reputation:** +20 Loeran's Rest

---

# MQ-E32 — A fekvőhely

**Quest ID:** `MQ-E32`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3

## Objectives

1. Találd meg a magasabban fekvő ligetet.
2. Vizsgáld meg a letaposott füvet.
3. Gyűjts 2 levált csontdarabot.
4. Vegyél Field-mérést.
5. Vizsgáld meg a sziklafalat.
6. Jelentsd, hogy a Hollow Crown hosszabb időt tölt itt.

## Rewards

**XP:** 320  
**Currency:** 38  
**Reputation:** +25 Loeran's Rest  
**Item:** [Hollow Crown levált csontlemeze](../items/elysia.md#hollow-crown-levalt-csontlemeze)

---

# MQ-E33 — A fal, amely lélegzik

**Quest ID:** `MQ-E33`  
**Quest Giver:** Discovery  
**Recommended Level:** 3

## Objectives

1. Figyeld meg a fű mozgását a sziklafal tövénél.
2. Találd meg a befelé húzó légáramot.
3. Vizsgáld meg a keskeny sziklarést.
4. Haladj át rajta.
5. Fedezd fel a túloldali völgy bejáratát.

## Rewards

**XP:** 350  
**Currency:** 42  
**Reputation:** +30 Loeran's Rest

## Developer Notes

- No quest marker on exact crack.
- Search zone may be shown, exact interact target not.
- Grass/wind VFX is the intended clue.

---

# MQ-E34 — A névtelen völgy

**Quest ID:** `MQ-E34`  
**Quest Giver:** Auto on discovery  
**Recommended Level:** 3  
**Party:** Solo possible / group safer

## Objectives

1. Lépj be a névtelen völgybe.
2. Fedezd fel az első Crowned csoportot.
3. Győzz le 3 Crowned ellenséget.
4. Fedezd fel a szabályos kőoszlopokat.
5. Találd meg a kör alakú teret.
6. Vizsgáld meg a zárt Thresholdot.
7. Térj vissza Marenhez és Tessához.

## Enemy Set

- [Crowned Wolf](../enemies/elysia.md#crowned-wolf)
- [Crowned Boar](../enemies/elysia.md#crowned-boar)
- [Crowned Stag](../enemies/elysia.md#crowned-stag)

## Rewards

**XP:** 380  
**Currency:** 45  
**Reputation:** +35 Loeran's Rest  
**Lore Flag:** `THRESHOLD_DISCOVERED`

---

# MQ-E35 — Mindig legyen visszaút

**Quest ID:** `MQ-E35`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3

## Quest Text

Maren nem engedi, hogy a Hollow Crown elleni csapat vakon induljon a völgybe. Előbb stabil visszaút kell.

## Objectives

1. Helyezz jelzőt a száraz folyómedernél.
2. Helyezz jelzőt a Seral-Fen őrháznál.
3. Helyezz jelzőt a sziklarésnél.
4. Járd végig a teljes útvonalat visszafelé.
5. Térj vissza Marenhez.

## Rewards

**XP:** 360  
**Currency:** 42  
**Reputation:** +30 Loeran's Rest  
**Item:** [Elysiai útjelző készlet](../items/elysia.md#elysiai-utjelzo-keszlet)

## Developer Notes

- No teleport unlock.
- These are navigation landmarks only.

---

# MQ-E36 — A Hollow Crown

**Quest ID:** `MQ-E36`  
**Quest Giver:** Maren Dorr  
**Recommended Level:** 3  
**Party:** Group recommended  
**Prerequisite:** `MQ-E35`

## Objectives

1. Figyeld meg a Threshold térségét reggel.
2. Figyeld meg délután.
3. Figyeld meg este.
4. Azonosítsd a Hollow Crown megjelenési mintáját.
5. Térj vissza Loeran’s Restbe.
6. Használd a Kalandor-táblát.
7. Hozz létre vagy csatlakozz Hollow Crown grouphoz.
8. Térj vissza a névtelen völgyhöz.

## Rewards

**XP:** 400  
**Currency:** 50  
**Reputation:** +40 Loeran's Rest  
**Unlock:** Hollow Crown encounter access

## Developer Notes

- No automatic matchmaking.
- LFG board/manual party.
- Quest does not teleport player to boss.

---

# MQ-E37 — A Küszöb

**Quest ID:** `MQ-E37`  
**Type:** Main Quest / Floor Boss / Floor Completion  
**Quest Giver:** Encounter start  
**Boss:** [The Hollow Crown](../bosses/elysia.md#the-hollow-crown)  
**Recommended Level:** 3  
**Party:** Team  
**Repeatable:** Boss yes / quest no  
**Prerequisite:** `MQ-E36`

## Objectives

1. Lépj be a Hollow Crown encounterbe.
2. Győzd le The Hollow Crownt.
3. Szerezd meg a személyes Boss Kill Flaget.
4. Vizsgáld meg az aktiválódó Thresholdot.
5. Térj vissza Illa Orinhoz.
6. Rögzíttesd a Floor 1 teljesítését.
7. Térj vissza a Thresholdhoz.
8. Lépj át a következő Floorra.

## Boss Kill Requirement

A Floor 2 belépési jogosultság **karakter-szintű**.

`FLOOR_E01_BOSS_KILL = true`

Partyban más játékos segíthet, de a karakternek jelen kell lennie a sikeres encounter completionnél.

## Rewards

**XP:** 650  
**Currency:** 90  
**Reputation:** +75 Loeran's Rest  
**Guaranteed Item:** [Hollow Crown emléktöredék](../items/elysia.md#hollow-crown-emlektoredek)  
**Personal Boss Loot:** see [The Hollow Crown](../bosses/elysia.md#the-hollow-crown)

## Unlocks

- Floor 1 Completed
- Floor 2 Threshold usage
- Mentor/replay access to Hollow Crown
- Post-Floor Illa/Maren/Tessa dialogue

## Developer Notes

- Boss kill does not reveal remaining Fog of War.
- Side Quests remain available.
- Threshold has no camp, guard post, tents, Ledger desk or constructed infrastructure around it.
- After completion, the player may return to Elysia freely.
