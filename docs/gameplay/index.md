---
title: Gameplay
---

# Gameplay

Ez a rész a Gnosis Online **implementációs igazságforrása**.

A Lore dokumentumok azt rögzítik, hogy mi történt a világban.

A Gameplay dokumentumok azt rögzítik, hogy ezt a játékban hogyan implementáljuk.

## Tartalom

- [Elysia Main Quests](main-quests/elysia.md)
- [Elysia Side Quests](side-quests/elysia.md)
- [Elysia Items](items/elysia.md)
- [Elysia Enemies](enemies/elysia.md)
- [Elysia Bosses](bosses/elysia.md)
- [Elysia NPCs](npcs/elysia.md)

## Stabil ID-konvenció

| Tartalom | Formátum | Példa |
| --- | --- | --- |
| Main Quest | `MQ-E##` | `MQ-E01` |
| Side Quest | `SQ-E##` | `SQ-E02` |
| NPC | `NPC-E01-###` | `NPC-E01-014` |
| Item | `ITEM-E01-<TYPE>-###` | `ITEM-E01-ARM-003` |
| Creature | `MOB-E01-<TYPE>-##` | `MOB-E01-WOLF-01` |
| Boss | `BOSS-E01-<TYPE>-##` | `BOSS-E01-OPT-01` |

Az ID **nem változik meg akkor sem, ha a megjelenített név később változik**.

## Initial Balance

A `Initial Balance` jelölésű XP-, currency-, stat-, HP-, damage- és drop-rate értékek implementálható kiindulópontok.

Ezek nem végleges balance-döntések.

Playtest után módosíthatók anélkül, hogy a Lore-t át kellene írni.
