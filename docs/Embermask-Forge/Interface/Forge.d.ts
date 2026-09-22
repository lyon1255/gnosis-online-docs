/**
 * Callback returned by a Forge event subscription. Invoke it to unregister that exact subscription.
 */
type ForgeUnsubscribe = () => void;

/**
 * Safe metadata exposed for UnityEngine.Object values. Raw Unity objects are never exposed to AddOn JavaScript.
 */
interface ForgeUnityObjectRef {
    /**
     * Fully qualified Unity runtime type name.
     */
    readonly $unityType: string;

    /**
     * Object display name.
     */
    readonly name: string;

    /**
     * Unity instance identifier for the current runtime session.
     */
    readonly instanceId: number;
}

/**
 * UI-facing classification of an aura as beneficial or harmful.
 */
type AuraDisposition =
    | "Buff"
    | "Debuff";

/**
 * High-level reason an aura instance disappeared from its target.
 */
type AuraRemovalReason =
    | "Expired"
    | "Dispelled"
    | "Removed";

/**
 * Stable high-level reason explaining why a spell or ability cast could not be started or completed.
 */
type CastFailureReason =
    | "Unknown"
    | "SpellNotKnown"
    | "WrongClass"
    | "LevelRequirement"
    | "TalentRequirement"
    | "NotInLoadout"
    | "NoResource"
    | "Cooldown"
    | "OutOfRange"
    | "LineOfSight"
    | "InvalidTarget"
    | "Silenced"
    | "Stunned"
    | "AlreadyCasting"
    | "CasterDead";

/**
 * Stable high-level reason explaining why an already-started cast was interrupted.
 */
type CastInterruptReason =
    | "Interrupted"
    | "Stunned"
    | "Silenced"
    | "CasterDied"
    | "Disconnected"
    | "TargetInvalidated";

/**
 * Supported social channel used to deliver or send a chat message.
 */
type ChatChannel =
    | "Local"
    | "Global"
    | "Trade"
    | "Whisper"
    | "Party"
    | "Guild"
    | "Officer"
    | "Alliance";

/**
 * Mutually exclusive result explaining why an attempted combat hit did not connect.
 */
type CombatAvoidanceResult =
    | "Miss"
    | "Dodge"
    | "Parry";

/**
 * Represents the local client's gameplay connection lifecycle state.
 */
type ConnectionState =
    | "Disconnected"
    | "Connecting"
    | "Connected"
    | "Reconnecting";

/**
 * Semantic gameplay source responsible for a player-currency balance change.
 */
type CurrencyChangeReason =
    | "Loot"
    | "Quest"
    | "Achievement"
    | "VendorPurchase"
    | "VendorSale"
    | "Trade"
    | "Auction"
    | "Repair"
    | "FastTravel"
    | "GuildInvestment"
    | "AdminCorrection";

/**
 * Primary damage category used by the public combat event contract.
 */
type DamageType =
    | "Physical"
    | "Magic"
    | "True";

/**
 * Supported encounter difficulty family exposed to Forge UI and AddOns.
 */
type EncounterDifficulty =
    | "Normal"
    | "Heroic"
    | "Mythic"
    | "Challenge";

/**
 * High-level category of a world entity that may be safely exposed through Forge.
 */
type EntityType =
    | "Player"
    | "Npc"
    | "WorldObject";

/**
 * Combat role advertised by a party or raid member.
 */
type GroupRole =
    | "Tank"
    | "Healer"
    | "Damage"
    | "Support"
    | "Hybrid";

/**
 * High-level form of the current player group.
 */
type GroupType =
    | "Party"
    | "Raid";

/**
 * Public guild rank assigned to a guild member.
 */
type GuildRank =
    | "Recruit"
    | "Member"
    | "Veteran"
    | "Officer"
    | "GuildMaster";

/**
 * Represents the client-visible loading lifecycle for a world, floor, or other gameplay context.
 */
type LoadingState =
    | "Idle"
    | "Loading"
    | "Loaded"
    | "Failed";

/**
 * Authentication lifecycle state of the active platform integration.
 */
type PlatformAuthState =
    | "Unavailable"
    | "Unauthenticated"
    | "Authenticating"
    | "Authenticated"
    | "Failed";

/**
 * Resource pool used by a character or unit for abilities and other gameplay actions.
 */
type PowerType =
    | "None"
    | "Mana"
    | "Stamina"
    | "Energy";

/**
 * Client-visible lifecycle state of a platform-backed cosmetic purchase.
 */
type PurchaseState =
    | "AwaitingApproval"
    | "Cancelled"
    | "PaidAwaitingGrant"
    | "Complete"
    | "Refunded"
    | "Revoked"
    | "Failed";

/**
 * Defines whether a collection objective tracks currently possessed items or items acquired over time.
 */
type QuestCollectMode =
    | "Possess"
    | "Acquire";

/**
 * Supported semantic categories for quest objectives.
 */
type QuestObjectiveType =
    | "Kill"
    | "Collect"
    | "Gather"
    | "Explore"
    | "Deliver"
    | "Interact"
    | "UseItemOn"
    | "Escort"
    | "Defend"
    | "BossClear"
    | "WorldEvent"
    | "Emote"
    | "Craft";

/**
 * High-level lifecycle state of a quest visible to the local player.
 */
type QuestState =
    | "Active"
    | "ReadyToTurnIn"
    | "Completed"
    | "Failed";

/**
 * Current response state of a member participating in a ready check.
 */
type ReadyCheckResponse =
    | "Pending"
    | "Ready"
    | "NotReady";

/**
 * Final lifecycle result of a resurrection offer presented to the player.
 */
type ResurrectionOfferResult =
    | "Accepted"
    | "Declined"
    | "Expired"
    | "Cancelled";

/**
 * Public in-combat or out-of-combat state of an addressable unit.
 */
type UnitCombatState =
    | "OutOfCombat"
    | "InCombat";

/**
 * Minimal snapshot of one Auction House listing relevant to the local player.
 */
interface AuctionInfo {
    /**
     * Stable GUID identifying the Auction House listing across client updates.
     */
    readonly auctionId: string;
    /**
     * Stable content identifier of the item definition.
     */
    readonly itemId: number;
    /**
     * Current or transferred stack quantity.
     */
    readonly quantity: number;
    /**
     * Starting bid amount in the game's smallest public currency unit. The public V1 contract uses a 32-bit integer to remain exactly representable in JavaScript.
     */
    readonly startingBid: number;
    /**
     * Optional buyout amount in the game's smallest public currency unit. The public V1 contract uses a 32-bit integer to remain exactly representable in JavaScript.
     */
    readonly buyout: number | null;
    /**
     * Optional authoritative expiration timestamp.
     */
    readonly expiresAt: string;
}

/**
 * Public snapshot of one active aura instance, including its source, disposition, stack count, and optional expiration time.
 */
interface AuraInfo {
    /**
     * Stable identifier of the individual aura or effect instance.
     */
    readonly effectInstanceId: string;
    /**
     * Stable content identifier of the spell or ability.
     */
    readonly spellId: number;
    /**
     * Optional entity responsible for creating the effect or state change.
     */
    readonly source: EntityRef | null;
    /**
     * UI-facing classification of the aura as a buff or debuff.
     */
    readonly disposition: AuraDisposition;
    /**
     * Current number of stacks on the aura instance.
     */
    readonly stacks: number;
    /**
     * Optional authoritative expiration timestamp.
     */
    readonly expiresAt: string | null;
}

/**
 * Delivered chat message with channel, sender metadata, text, and delivery timestamp.
 */
interface ChatMessageInfo {
    /**
     * Stable identifier of the chat message.
     */
    readonly messageId: string;
    /**
     * Chat channel through which the message was delivered.
     */
    readonly channel: ChatChannel;
    /**
     * Optional character identifier of the sender; null for system-originated messages.
     */
    readonly senderGuid: string | null;
    /**
     * Optional display name of the sender.
     */
    readonly senderName: string | null;
    /**
     * Text content that is safe for the receiving client to display.
     */
    readonly text: string;
    /**
     * Authoritative timestamp at which the message was sent.
     */
    readonly sentAt: string;
}

/**
 * Public state snapshot for an Adventurer Contract visible to the local player or group.
 */
interface ContractInfo {
    /**
     * Stable identifier of the Adventurer Contract.
     */
    readonly contractId: string;
    /**
     * Stable content identifier of the associated world area.
     */
    readonly areaId: number;
    /**
     * Optional guild currently holding the contract.
     */
    readonly holderGuildId: string | null;
    /**
     * Optional party currently holding the contract.
     */
    readonly holderPartyId: string | null;
    /**
     * Optional authoritative expiration timestamp.
     */
    readonly expiresAt: string;
    /**
     * Optional normalized or gameplay-defined progress value exposed by the authoritative system.
     */
    readonly progress: number;
    /**
     * Stable non-localized state code describing the current lifecycle state.
     */
    readonly stateCode: string;
}

/**
 * Verified, provider-secret-free view of cosmetic ownership for the current account.
 */
interface CosmeticEntitlementInfo {
    /**
     * Stable content identifier of the cosmetic definition.
     */
    readonly cosmeticDefinitionId: string;
    /**
     * Whether the cosmetic entitlement is currently owned.
     */
    readonly owned: boolean;
    /**
     * Timestamp at which ownership was last authoritatively verified.
     */
    readonly verifiedAt: string;
}

/**
 * Shared identity and configuration snapshot for an active or recently completed encounter instance.
 */
interface EncounterInfo {
    /**
     * Stable identifier of the active game instance.
     */
    readonly instanceId: string;
    /**
     * Stable identifier of the encounter instance.
     */
    readonly encounterId: string;
    /**
     * Optional stable content identifier of the primary boss.
     */
    readonly bossId: number | null;
    /**
     * Difficulty mode of the encounter.
     */
    readonly difficulty: EncounterDifficulty;
    /**
     * Stable identifier of the participating group.
     */
    readonly groupId: string;
}

/**
 * Minimal, safe reference to a client-visible world entity. It carries stable identity and lifecycle information without duplicating the entity's full gameplay state.
 */
interface EntityRef {
    /**
     * Stable identifier of the affected entity.
     */
    readonly guid: string;
    /**
     * High-level public category of the referenced entity.
     */
    readonly entityType: EntityType;
    /**
     * Lifecycle generation of this entity reference. It changes when a runtime identity is recycled for a new spawn.
     */
    readonly spawnGeneration: number;
}

/**
 * Minimal public guild-roster entry for one character.
 */
interface GuildMemberInfo {
    /**
     * Stable identifier of the character.
     */
    readonly characterGuid: string;
    /**
     * Display name that is safe for the local client to show.
     */
    readonly name: string;
    /**
     * Public guild rank assigned to the member.
     */
    readonly rank: GuildRank;
    /**
     * Whether the member is currently online.
     */
    readonly online: boolean;
}

/**
 * Reusable minimal item-stack snapshot shared by inventory, loot, reward, and Auction House events.
 */
interface ItemStackInfo {
    /**
     * Stable identifier of the concrete item instance.
     */
    readonly itemInstanceGuid: string;
    /**
     * Stable content identifier of the item definition.
     */
    readonly itemId: number;
    /**
     * Current or transferred stack quantity.
     */
    readonly quantity: number;
    /**
     * Optional container slot index associated with the item.
     */
    readonly slot: number | null;
    /**
     * Whether the item instance is currently bound.
     */
    readonly isBound: boolean;
}

/**
 * Safe mail-list metadata used by inbox UI and notifications without exposing hidden server-side mail state.
 */
interface MailSummaryInfo {
    /**
     * Stable identifier of the mail message.
     */
    readonly mailId: string;
    /**
     * Display name shown for the mail sender.
     */
    readonly senderDisplayName: string;
    /**
     * Mail subject visible to the recipient.
     */
    readonly subject: string;
    /**
     * Authoritative timestamp at which the mail was received.
     */
    readonly receivedAt: string;
    /**
     * Optional authoritative expiration timestamp.
     */
    readonly expiresAt: string | null;
    /**
     * Whether the mail has been marked as read.
     */
    readonly isRead: boolean;
    /**
     * Whether the mail currently contains a claimable attachment.
     */
    readonly hasAttachment: boolean;
}

/**
 * Batched Fog-of-War discovery update containing newly revealed map cells and a revision number.
 */
interface MapDiscoveryDelta {
    /**
     * Map cells newly revealed by this discovery update.
     */
    readonly revealedCells: ReadonlyArray<{ x: number; y: number }>;
    /**
     * Monotonically increasing map-discovery revision used to reject stale Fog-of-War updates.
     */
    readonly revision: number;
}

/**
 * Minimal public party or raid member snapshot used by roster and group UI.
 */
interface PartyMemberInfo {
    /**
     * Stable identifier of the affected entity.
     */
    readonly guid: string;
    /**
     * Display name that is safe for the local client to show.
     */
    readonly name: string;
    /**
     * Public combat role of the group member.
     */
    readonly role: GroupRole;
    /**
     * Whether the member is currently online.
     */
    readonly online: boolean;
    /**
     * Whether the member is currently on the same world layer as the local player.
     */
    readonly sameLayer: boolean;
    /**
     * Optional raid subgroup index.
     */
    readonly subgroup: number | null;
}

/**
 * Provider-secret-free purchase state required by commerce UI.
 */
interface PurchaseInfo {
    /**
     * Stable identifier of the purchase transaction.
     */
    readonly purchaseId: string;
    /**
     * Stable platform or catalog product identifier.
     */
    readonly productId: string;
    /**
     * Current lifecycle state represented by this payload.
     */
    readonly state: PurchaseState;
    /**
     * Authoritative timestamp of the latest state update.
     */
    readonly updatedAt: string;
}

/**
 * Current authoritative progress state of one quest objective.
 */
interface QuestObjectiveProgress {
    /**
     * Stable identifier of the quest objective.
     */
    readonly objectiveId: number;
    /**
     * Semantic type of the objective or data entry.
     */
    readonly type: QuestObjectiveType;
    /**
     * Optional collection-tracking mode; populated only for collection objectives.
     */
    readonly collectMode: QuestCollectMode | null;
    /**
     * Current objective progress value. The public V1 contract uses a 32-bit integer.
     */
    readonly current: number;
    /**
     * Progress value required to complete the objective. The public V1 contract uses a 32-bit integer.
     */
    readonly required: number;
    /**
     * Whether the tracked objective or operation is complete.
     */
    readonly completed: boolean;
}

/**
 * Ready-check result for one group member.
 */
interface ReadyCheckMemberInfo {
    /**
     * Stable character identifier of the group member.
     */
    readonly memberGuid: string;
    /**
     * Current response state for the ready check.
     */
    readonly response: ReadyCheckResponse;
}

/**
 * One selectable quest-reward option and the reward package associated with that choice.
 */
interface RewardChoiceInfo {
    /**
     * Stable identifier of the selectable reward option.
     */
    readonly choiceId: number;
    /**
     * Reward package associated with this choice.
     */
    readonly reward: RewardInfo;
}

/**
 * Summary of rewards that have already been granted or selected. It never describes unrevealed loot or hidden drop-table information.
 */
interface RewardInfo {
    /**
     * Items included in this snapshot.
     */
    readonly items: ReadonlyArray<ItemStackInfo>;
    /**
     * Currency amount represented in the game's smallest public currency unit. The public V1 contract uses a 32-bit integer to remain exactly representable in JavaScript.
     */
    readonly money: number;
    /**
     * Experience-point amount represented as a 32-bit integer so the value remains exact in JavaScript.
     */
    readonly experience: number;
    /**
     * Optional reputation amount when the reward can be represented by one aggregate value.
     */
    readonly reputation: number | null;
}

/**
 * Minimal snapshot describing an accepted spell or ability cast, including identity, caster, optional target, and timing information.
 */
interface SpellCastInfo {
    /**
     * Stable identifier of this cast lifecycle.
     */
    readonly castId: string;
    /**
     * Stable content identifier of the spell or ability.
     */
    readonly spellId: number;
    /**
     * Entity that initiated the cast.
     */
    readonly caster: EntityRef;
    /**
     * Optional entity targeted by the action or cast.
     */
    readonly target: EntityRef | null;
    /**
     * Authoritative timestamp at which the operation started.
     */
    readonly startedAt: string;
    /**
     * Optional authoritative timestamp at which the operation is expected to end.
     */
    readonly endsAt: string | null;
}

/**
 * One data-driven calculated stat exposed as a stable stat key and its current numeric value.
 */
interface StatValue {
    /**
     * Stable data-driven key identifying the stat.
     */
    readonly statId: string;
    /**
     * Current value represented by this entry.
     */
    readonly value: number;
}

/**
 * Minimal item-stack entry included in a direct player-to-player trade offer.
 */
interface TradeItemInfo {
    /**
     * Stable identifier of the concrete item instance.
     */
    readonly itemInstanceGuid: string;
    /**
     * Stable content identifier of the item definition.
     */
    readonly itemId: number;
    /**
     * Current or transferred stack quantity.
     */
    readonly quantity: number;
}

/**
 * Snapshot of one participant's current direct-trade offer, including offered items and currency.
 */
interface TradeOfferInfo {
    /**
     * Items included in this snapshot.
     */
    readonly items: ReadonlyArray<TradeItemInfo>;
    /**
     * Currency amount represented in the game's smallest public currency unit. The public V1 contract uses a 32-bit integer to remain exactly representable in JavaScript.
     */
    readonly money: number;
}

/**
 * Public snapshot of a world event that the local client is legitimately allowed to know about.
 */
interface WorldEventInfo {
    /**
     * Stable identifier of the runtime world-event instance.
     */
    readonly worldEventId: string;
    /**
     * Stable content identifier of the world-event definition.
     */
    readonly eventTemplateId: number;
    /**
     * Stable non-localized state code describing the current lifecycle state.
     */
    readonly stateCode: string;
    /**
     * Authoritative timestamp at which the operation started.
     */
    readonly startedAt: string;
    /**
     * Optional authoritative timestamp at which the operation is expected to end.
     */
    readonly endsAt: string | null;
    /**
     * Optional normalized or gameplay-defined progress value exposed by the authoritative system.
     */
    readonly progress: number | null;
}

/**
 * Map of every enabled public Forge event to its immutable JavaScript payload contract.
 */
interface ForgeEventMap {
    /**
     * Published when achievement completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "ACHIEVEMENT_COMPLETED": {
        /**
         * Stable identifier of the achievement referenced by this payload.
         */
        readonly achievementId: number;
        /**
         * Authoritative timestamp associated with completed.
         */
        readonly completedAt: string;
        /**
         * Reward package associated with this choice.
         */
        readonly reward: RewardInfo | null;
    };
    /**
     * Published when the authoritative achievement progress state changes. The payload contains the resulting state and identifiers needed by Achievement UI or AddOns to update without polling.
     */
    "ACHIEVEMENT_PROGRESS_CHANGED": {
        /**
         * Stable identifier of the achievement referenced by this payload.
         */
        readonly achievementId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Value required to complete the tracked progress.
         */
        readonly required: number;
    };
    /**
     * Published when the authoritative character appearance state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling.
     */
    "CHARACTER_APPEARANCE_CHANGED": {
        /**
         * Stable identifier of the character.
         */
        readonly characterGuid: string;
        /**
         * Revision number of the character's appearance state.
         */
        readonly appearanceRevision: number;
    };
    /**
     * Published when cosmetic is authoritatively equipped and the resulting equipment state becomes active.
     */
    "COSMETIC_EQUIPPED": {
        /**
         * Stable content identifier of the cosmetic definition.
         */
        readonly cosmeticDefinitionId: string;
        /**
         * Stable identifier of the affected loadout or equipment slot.
         */
        readonly slotId: string;
    };
    /**
     * Published when cosmetic is authoritatively unequipped and removed from its active equipment slot.
     */
    "COSMETIC_UNEQUIPPED": {
        /**
         * Stable content identifier of the cosmetic definition.
         */
        readonly cosmeticDefinitionId: string;
        /**
         * Stable identifier of the affected loadout or equipment slot.
         */
        readonly slotId: string;
    };
    /**
     * Published when the authoritative transmog state changes. The payload contains the resulting state and identifiers needed by Appearance UI or AddOns to update without polling.
     */
    "TRANSMOG_CHANGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the appearance or cosmetic configuration.
         */
        readonly appearanceId: string | null;
    };
    /**
     * Published when auction bid is successfully placed and accepted by the authoritative system.
     */
    "AUCTION_BID_PLACED": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Resolved numeric amount associated with the event.
         */
        readonly amount: number;
    };
    /**
     * Published when auction buyout completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "AUCTION_BUYOUT_COMPLETED": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Current or transferred stack quantity.
         */
        readonly quantity: number;
        /**
         * Total currency paid by the local player.
         */
        readonly totalPaid: number;
    };
    /**
     * Published when auction item is returned to the local player after the authoritative transaction lifecycle ends.
     */
    "AUCTION_ITEM_RETURNED": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Authoritative item value associated with this payload.
         */
        readonly item: ItemStackInfo;
    };
    /**
     * Published when auction listing is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information.
     */
    "AUCTION_LISTING_CANCELLED": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
    };
    /**
     * Published when auction listing is created and becomes visible to the local client.
     */
    "AUCTION_LISTING_CREATED": {
        /**
         * Snapshot of the Auction House listing.
         */
        readonly auction: AuctionInfo;
    };
    /**
     * Published when auction listing expires according to authoritative game state.
     */
    "AUCTION_LISTING_EXPIRED": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Whether the local player held the winning bid immediately before the listing ended.
         */
        readonly hadWinningBid: boolean;
    };
    /**
     * Published when the local player is outbid on auction. The payload contains only information the client is allowed to know.
     */
    "AUCTION_OUTBID": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Currency returned to the player as part of the operation.
         */
        readonly refunded: number;
    };
    /**
     * Published when auction is sold and the authoritative transaction result is available.
     */
    "AUCTION_SOLD": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Gross sale value before fees.
         */
        readonly grossPrice: number;
        /**
         * Auction fee deducted from the gross sale value.
         */
        readonly fee: number;
        /**
         * Final sale proceeds after fees.
         */
        readonly netProceeds: number;
    };
    /**
     * Published when the local player wins auction and the result becomes authoritative.
     */
    "AUCTION_WON": {
        /**
         * Stable identifier of the Auction House listing.
         */
        readonly auctionId: string;
        /**
         * Authoritative item value associated with this payload.
         */
        readonly item: ItemStackInfo;
        /**
         * Final winning bid amount.
         */
        readonly winningBid: number;
    };
    /**
     * Published when aura is added to the local client's authoritative public state. The payload identifies the newly available object or entity.
     */
    "AURA_ADDED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Snapshot of the affected aura instance.
         */
        readonly aura: AuraInfo;
    };
    /**
     * Published when aura is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "AURA_REMOVED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Stable identifier of the individual aura or effect instance.
         */
        readonly effectInstanceId: string;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Stable semantic reason associated with the event.
         */
        readonly reason: AuraRemovalReason;
    };
    /**
     * Published when the public state of aura is updated. The payload contains the latest authoritative snapshot or delta required by consumers.
     */
    "AURA_UPDATED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Snapshot of the affected aura instance.
         */
        readonly aura: AuraInfo;
    };
    /**
     * Published when the authoritative ability loadout state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "ABILITY_LOADOUT_CHANGED": {
        /**
         * Zero-based slot index within the relevant container or loadout.
         */
        readonly slotIndex: number;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
    };
    /**
     * Published when the authoritative player level state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "PLAYER_LEVEL_CHANGED": {
        /**
         * Authoritative value before the change.
         */
        readonly previous: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
    };
    /**
     * Published when the authoritative player role state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "PLAYER_ROLE_CHANGED": {
        /**
         * Authoritative value before the change.
         */
        readonly previous: GroupRole | null;
        /**
         * Authoritative current value after the change.
         */
        readonly current: GroupRole;
    };
    /**
     * Published when the local player's experience total changes. The payload contains the resulting experience value and signed delta applied by the change.
     */
    "PLAYER_XP_CHANGED": {
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Signed difference applied by this change.
         */
        readonly delta: number;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative specialization state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "SPECIALIZATION_CHANGED": {
        /**
         * Previous specialization identifier before the change.
         */
        readonly previousSpecializationId: number | null;
        /**
         * Current specialization identifier after the change.
         */
        readonly currentSpecializationId: number;
    };
    /**
     * Published when the authoritative 'SPECIALIZATION_UNLOCKED' gameplay event occurs. The payload contains only client-visible state intended for Character UI and AddOns.
     */
    "SPECIALIZATION_UNLOCKED": {
        /**
         * Stable content identifier of the specialization.
         */
        readonly specializationId: number;
    };
    /**
     * Published when the authoritative spellbook state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "SPELLBOOK_CHANGED": {
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Whether the referenced content is currently known to the player.
         */
        readonly known: boolean;
    };
    /**
     * Published when the authoritative talent state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "TALENT_CHANGED": {
        /**
         * Stable content identifier of the talent.
         */
        readonly talentId: number;
        /**
         * Guild rank before the change.
         */
        readonly previousRank: number;
        /**
         * Guild rank after the change.
         */
        readonly currentRank: number;
    };
    /**
     * Published when the authoritative talent points state changes. The payload contains the resulting state and identifiers needed by Character UI or AddOns to update without polling.
     */
    "TALENT_POINTS_CHANGED": {
        /**
         * Whether the feature or action is currently available.
         */
        readonly available: number;
        /**
         * Number of points currently spent in the relevant progression system.
         */
        readonly spent: number;
    };
    /**
     * Published when a chat message is successfully delivered to the local client through a supported channel.
     */
    "CHAT_MESSAGE_RECEIVED": {
        /**
         * Delivered or rejected chat-message payload.
         */
        readonly message: ChatMessageInfo;
    };
    /**
     * Published when an attempted outgoing chat message is rejected before delivery. The payload exposes a stable non-localized reason code suitable for UI handling.
     */
    "CHAT_MESSAGE_REJECTED": {
        /**
         * Chat channel through which the message was delivered.
         */
        readonly channel: ChatChannel;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when auto attack starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "AUTO_ATTACK_STARTED": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
    };
    /**
     * Published when the authoritative 'AUTO_ATTACK_STOPPED' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "AUTO_ATTACK_STOPPED": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef | null;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative 'COMBAT_ABSORB' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "COMBAT_ABSORB": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef | null;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Resolved numeric amount associated with the event.
         */
        readonly amount: number;
    };
    /**
     * Published when a resolved combat action deals actual health damage. The payload identifies source, target, ability context, damage type, amount, and critical/absorb information when available.
     */
    "COMBAT_DAMAGE": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Resolved numeric amount associated with the event.
         */
        readonly amount: number;
        /**
         * Amount absorbed by shielding or mitigation, when applicable.
         */
        readonly absorbed: number;
        /**
         * Whether the social identity is currently blocked.
         */
        readonly blocked: number;
        /**
         * Damage category used for this resolved combat action.
         */
        readonly damageType: DamageType;
        /**
         * Whether the resolved combat action was a critical result.
         */
        readonly critical: boolean;
    };
    /**
     * Published when the authoritative 'COMBAT_DISPEL' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "COMBAT_DISPEL": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Stable identifier of the individual aura or effect instance.
         */
        readonly effectInstanceId: string;
    };
    /**
     * Published when a resolved combat or healing effect restores health. The payload describes the source, target, ability context, restored amount, and critical result when applicable.
     */
    "COMBAT_HEAL": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Resolved numeric amount associated with the event.
         */
        readonly amount: number;
        /**
         * Whether the resolved combat action was a critical result.
         */
        readonly critical: boolean;
    };
    /**
     * Published when the authoritative 'COMBAT_INTERRUPT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "COMBAT_INTERRUPT": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Stable content identifier of the spell that was interrupted.
         */
        readonly interruptedSpellId: number;
        /**
         * Stable identifier of this cast lifecycle.
         */
        readonly castId: string;
    };
    /**
     * Published when the authoritative 'COMBAT_MISS' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "COMBAT_MISS": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
        /**
         * Stable semantic result of the operation.
         */
        readonly result: CombatAvoidanceResult;
    };
    /**
     * Published when the authoritative 'COMBAT_TAUNT' gameplay event occurs. The payload contains only client-visible state intended for Combat UI and AddOns.
     */
    "COMBAT_TAUNT": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
    };
    /**
     * Published when the authoritative 'CONTRACT_ACQUIRED' gameplay event occurs. The payload contains only client-visible state intended for Contract UI and AddOns.
     */
    "CONTRACT_ACQUIRED": {
        /**
         * Current public snapshot of the Adventurer Contract.
         */
        readonly contract: ContractInfo;
    };
    /**
     * Published when contract expires according to authoritative game state.
     */
    "CONTRACT_EXPIRED": {
        /**
         * Stable identifier of the Adventurer Contract.
         */
        readonly contractId: string;
        /**
         * Authoritative timestamp at which the object expired.
         */
        readonly expiredAt: string;
    };
    /**
     * Published when the authoritative contract progress state changes. The payload contains the resulting state and identifiers needed by Contract UI or AddOns to update without polling.
     */
    "CONTRACT_PROGRESS_CHANGED": {
        /**
         * Current public snapshot of the Adventurer Contract.
         */
        readonly contract: ContractInfo;
    };
    /**
     * Published when contract is authoritatively revoked and should no longer be treated as active or owned.
     */
    "CONTRACT_REVOKED": {
        /**
         * Stable identifier of the Adventurer Contract.
         */
        readonly contractId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when contract is suspended and temporarily stops progressing while remaining part of authoritative state.
     */
    "CONTRACT_SUSPENDED": {
        /**
         * Stable identifier of the Adventurer Contract.
         */
        readonly contractId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the local player's authoritative gameplay-currency balance changes. The payload contains the resulting balance, signed delta, and semantic reason for the change.
     */
    "PLAYER_MONEY_CHANGED": {
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Signed difference applied by this change.
         */
        readonly delta: number;
        /**
         * Stable semantic reason associated with the event.
         */
        readonly reason: CurrencyChangeReason;
    };
    /**
     * Published when the authoritative 'PLAYER_RESPAWNED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.
     */
    "PLAYER_RESPAWNED": {
        /**
         * Authoritative world-space position.
         */
        readonly position: { x: number; y: number; z: number };
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when the authoritative 'PLAYER_RESPAWN_SCHEDULED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.
     */
    "PLAYER_RESPAWN_SCHEDULED": {
        /**
         * Authoritative time at which respawn becomes available or occurs.
         */
        readonly respawnAt: string;
        /**
         * Stable identifier of the current bind point.
         */
        readonly bindPointId: number | null;
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when the authoritative 'RESURRECTION_OFFERED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.
     */
    "RESURRECTION_OFFERED": {
        /**
         * Stable identifier of the resurrection or transaction offer.
         */
        readonly offerId: string;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Optional authoritative expiration timestamp.
         */
        readonly expiresAt: string | null;
    };
    /**
     * Published when resurrection offer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "RESURRECTION_OFFER_ENDED": {
        /**
         * Stable identifier of the resurrection or transaction offer.
         */
        readonly offerId: string;
        /**
         * Stable semantic result of the operation.
         */
        readonly result: ResurrectionOfferResult;
    };
    /**
     * Published when unit dies in authoritative game state. The payload contains the public context required by consumers.
     */
    "UNIT_DIED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: EntityRef;
        /**
         * Optional entity credited with the death.
         */
        readonly killer: EntityRef | null;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
    };
    /**
     * Published when the authoritative 'UNIT_RESURRECTED' gameplay event occurs. The payload contains only client-visible state intended for Death UI and AddOns.
     */
    "UNIT_RESURRECTED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: EntityRef;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef | null;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number | null;
    };
    /**
     * Published when challenge timer reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "CHALLENGE_TIMER_ENDED": {
        /**
         * Stable identifier of the active game instance.
         */
        readonly instanceId: string;
        /**
         * Elapsed timer duration in milliseconds.
         */
        readonly elapsed: number;
        /**
         * Whether the operation completed successfully.
         */
        readonly success: boolean;
    };
    /**
     * Published when challenge timer starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "CHALLENGE_TIMER_STARTED": {
        /**
         * Stable identifier of the active game instance.
         */
        readonly instanceId: string;
        /**
         * Authoritative timestamp at which the operation started.
         */
        readonly startedAt: string;
        /**
         * Optional authoritative timestamp at which the operation is expected to end.
         */
        readonly endsAt: string;
    };
    /**
     * Published when encounter completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "ENCOUNTER_COMPLETED": {
        /**
         * Stable identifier of the encounter instance.
         */
        readonly encounterId: string;
        /**
         * Optional stable content identifier of the primary boss.
         */
        readonly bossId: number | null;
        /**
         * Difficulty mode of the encounter.
         */
        readonly difficulty: EncounterDifficulty;
        /**
         * Elapsed duration in milliseconds.
         */
        readonly duration: number;
    };
    /**
     * Published when the authoritative encounter difficulty state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.
     */
    "ENCOUNTER_DIFFICULTY_CHANGED": {
        /**
         * Stable identifier of the active game instance.
         */
        readonly instanceId: string;
        /**
         * Difficulty mode of the encounter.
         */
        readonly difficulty: EncounterDifficulty;
    };
    /**
     * Published when the authoritative encounter phase state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.
     */
    "ENCOUNTER_PHASE_CHANGED": {
        /**
         * Stable identifier of the encounter instance.
         */
        readonly encounterId: string;
        /**
         * Stable identifier of the current encounter phase.
         */
        readonly phaseId: string;
    };
    /**
     * Published when encounter is reset to its authoritative baseline state.
     */
    "ENCOUNTER_RESET": {
        /**
         * Stable identifier of the encounter instance.
         */
        readonly encounterId: string;
        /**
         * Authoritative timestamp at which the lockout or state resets.
         */
        readonly resetAt: string;
    };
    /**
     * Published when encounter starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "ENCOUNTER_STARTED": {
        /**
         * Encounter identity and configuration snapshot.
         */
        readonly encounter: EncounterInfo;
        /**
         * Authoritative timestamp at which the operation started.
         */
        readonly startedAt: string;
    };
    /**
     * Published when encounter is recognized as a wipe by the authoritative encounter state.
     */
    "ENCOUNTER_WIPED": {
        /**
         * Stable identifier of the encounter instance.
         */
        readonly encounterId: string;
        /**
         * Authoritative timestamp at which the encounter wipe was recognized.
         */
        readonly wipedAt: string;
    };
    /**
     * Published when first kill is authoritatively recorded and becomes part of the player's visible progression state.
     */
    "FIRST_KILL_RECORDED": {
        /**
         * Optional stable content identifier of the primary boss.
         */
        readonly bossId: number;
        /**
         * Stable identifier of the persisted record.
         */
        readonly recordId: string;
        /**
         * Authoritative timestamp at which the record was created.
         */
        readonly recordedAt: string;
    };
    /**
     * Published when the authoritative 'INSTANCE_ENTERED' gameplay event occurs. The payload contains only client-visible state intended for Encounter UI and AddOns.
     */
    "INSTANCE_ENTERED": {
        /**
         * Encounter identity and configuration snapshot.
         */
        readonly encounter: EncounterInfo;
    };
    /**
     * Published when instance leaves the relevant social, group, or world context.
     */
    "INSTANCE_LEFT": {
        /**
         * Stable identifier of the active game instance.
         */
        readonly instanceId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative raid loot lockout state changes. The payload contains the resulting state and identifiers needed by Encounter UI or AddOns to update without polling.
     */
    "RAID_LOOT_LOCKOUT_CHANGED": {
        /**
         * Optional stable content identifier of the primary boss.
         */
        readonly bossId: number;
        /**
         * Whether the local player is currently eligible for the operation or reward.
         */
        readonly eligible: boolean;
        /**
         * Authoritative timestamp at which the lockout or state resets.
         */
        readonly resetAt: string | null;
    };
    /**
     * Published when item is authoritatively equipped and the resulting equipment state becomes active.
     */
    "ITEM_EQUIPPED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Bit mask identifying the currently occupied equipment slots.
         */
        readonly slotMask: number;
    };
    /**
     * Published when item is authoritatively unequipped and removed from its active equipment slot.
     */
    "ITEM_UNEQUIPPED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Bit mask identifying the previously occupied equipment slots.
         */
        readonly previousSlotMask: number;
    };
    /**
     * Published when the authoritative group type state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.
     */
    "GROUP_TYPE_CHANGED": {
        /**
         * Stable identifier of the participating group.
         */
        readonly groupId: string;
        /**
         * Authoritative value before the change.
         */
        readonly previous: GroupType;
        /**
         * Authoritative current value after the change.
         */
        readonly current: GroupType;
    };
    /**
     * Published when the authoritative lfg listing state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.
     */
    "LFG_LISTING_CHANGED": {
        /**
         * Stable identifier of the group-finder listing.
         */
        readonly listingId: string;
        /**
         * Whether the relationship or state is currently active.
         */
        readonly active: boolean;
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when party is created and becomes visible to the local client.
     */
    "PARTY_CREATED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Stable identifier of the current group leader.
         */
        readonly leaderGuid: string;
    };
    /**
     * Published when party is disbanded in authoritative game state. The payload contains the public context required by consumers.
     */
    "PARTY_DISBANDED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when party invite reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "PARTY_INVITE_ENDED": {
        /**
         * Stable identifier of the group invitation.
         */
        readonly inviteId: string;
        /**
         * Stable non-localized result code for the operation.
         */
        readonly resultCode: string;
    };
    /**
     * Published when party invite is received by the local client and becomes available to the relevant UI or AddOn.
     */
    "PARTY_INVITE_RECEIVED": {
        /**
         * Stable identifier of the group invitation.
         */
        readonly inviteId: string;
        /**
         * Safe reference to the player who sent the invitation.
         */
        readonly inviter: EntityRef;
        /**
         * Optional authoritative expiration timestamp.
         */
        readonly expiresAt: string;
    };
    /**
     * Published when the authoritative party layer status state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.
     */
    "PARTY_LAYER_STATUS_CHANGED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Stable character identifier of the group member.
         */
        readonly memberGuid: string;
        /**
         * Whether the member is currently on the same world layer as the local player.
         */
        readonly sameLayer: boolean;
        /**
         * Optional public identifier of the active world layer.
         */
        readonly layerId: string | null;
    };
    /**
     * Published when the authoritative party leader state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.
     */
    "PARTY_LEADER_CHANGED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Stable identifier of the previous group leader.
         */
        readonly previousLeaderGuid: string;
        /**
         * Stable identifier of the new group leader.
         */
        readonly currentLeaderGuid: string;
    };
    /**
     * Published when party member joins the relevant social or group context and becomes visible to the local client.
     */
    "PARTY_MEMBER_JOINED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Current public snapshot of the group member.
         */
        readonly member: PartyMemberInfo;
    };
    /**
     * Published when party member leaves the relevant social, group, or world context.
     */
    "PARTY_MEMBER_LEFT": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Stable character identifier of the group member.
         */
        readonly memberGuid: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the public state of party member is updated. The payload contains the latest authoritative snapshot or delta required by consumers.
     */
    "PARTY_MEMBER_UPDATED": {
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Current public snapshot of the group member.
         */
        readonly member: PartyMemberInfo;
    };
    /**
     * Published when ready check completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "READY_CHECK_COMPLETED": {
        /**
         * Stable identifier of the ready-check session.
         */
        readonly readyCheckId: string;
        /**
         * Final or current ready-check responses for participating members.
         */
        readonly responses: ReadonlyArray<ReadyCheckMemberInfo>;
    };
    /**
     * Published when the authoritative ready check response state changes. The payload contains the resulting state and identifiers needed by Group UI or AddOns to update without polling.
     */
    "READY_CHECK_RESPONSE_CHANGED": {
        /**
         * Stable identifier of the ready-check session.
         */
        readonly readyCheckId: string;
        /**
         * Stable character identifier of the group member.
         */
        readonly memberGuid: string;
        /**
         * Current response state for the ready check.
         */
        readonly response: ReadyCheckResponse;
    };
    /**
     * Published when ready check starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "READY_CHECK_STARTED": {
        /**
         * Stable identifier of the ready-check session.
         */
        readonly readyCheckId: string;
        /**
         * Stable identifier of the party.
         */
        readonly partyId: string;
        /**
         * Authoritative initiator guid value associated with this payload.
         */
        readonly initiatorGuid: string;
        /**
         * Optional authoritative expiration timestamp.
         */
        readonly expiresAt: string;
    };
    /**
     * Published when the authoritative guild alliance state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_ALLIANCE_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable identifier of the guild alliance.
         */
        readonly allianceId: string | null;
        /**
         * Whether the relationship or state is currently active.
         */
        readonly active: boolean;
    };
    /**
     * Published when the authoritative guild application state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_APPLICATION_CHANGED": {
        /**
         * Stable identifier of the guild application.
         */
        readonly applicationId: string;
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable non-localized state code describing the current lifecycle state.
         */
        readonly stateCode: string;
    };
    /**
     * Published when the authoritative guild bank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_BANK_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the authoritative guild boss state state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_BOSS_STATE_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Optional stable content identifier of the primary boss.
         */
        readonly bossId: number;
        /**
         * Stable non-localized state code describing the current lifecycle state.
         */
        readonly stateCode: string;
    };
    /**
     * Published when the authoritative guild calendar state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_CALENDAR_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the authoritative guild investment state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_INVESTMENT_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable character identifier of the member responsible for the contribution.
         */
        readonly contributorGuid: string;
        /**
         * Resolved numeric amount associated with the event.
         */
        readonly amount: number;
        /**
         * Authoritative total guild investment after the change.
         */
        readonly totalInvestment: number;
    };
    /**
     * Published when guild joins the relevant social or group context and becomes visible to the local client.
     */
    "GUILD_JOINED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Display name of the guild.
         */
        readonly guildName: string;
        /**
         * Public guild rank assigned to the member.
         */
        readonly rank: GuildRank;
    };
    /**
     * Published when the authoritative guild leader state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_LEADER_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable identifier of the previous group leader.
         */
        readonly previousLeaderGuid: string;
        /**
         * Stable identifier of the new group leader.
         */
        readonly currentLeaderGuid: string;
    };
    /**
     * Published when guild leaves the relevant social, group, or world context.
     */
    "GUILD_LEFT": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative guild level state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_LEVEL_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Authoritative value before the change.
         */
        readonly previous: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
    };
    /**
     * Published when guild member joins the relevant social or group context and becomes visible to the local client.
     */
    "GUILD_MEMBER_JOINED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Current public snapshot of the group member.
         */
        readonly member: GuildMemberInfo;
    };
    /**
     * Published when guild member leaves the relevant social, group, or world context.
     */
    "GUILD_MEMBER_LEFT": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable character identifier of the group member.
         */
        readonly memberGuid: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the public state of guild member is updated. The payload contains the latest authoritative snapshot or delta required by consumers.
     */
    "GUILD_MEMBER_UPDATED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Current public snapshot of the group member.
         */
        readonly member: GuildMemberInfo;
    };
    /**
     * Published when the authoritative guild quest state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_QUEST_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the authoritative guild rank state changes. The payload contains the resulting state and identifiers needed by Guild UI or AddOns to update without polling.
     */
    "GUILD_RANK_CHANGED": {
        /**
         * Stable identifier of the guild.
         */
        readonly guildId: string;
        /**
         * Stable character identifier of the group member.
         */
        readonly memberGuid: string;
        /**
         * Authoritative value before the change.
         */
        readonly previous: GuildRank;
        /**
         * Authoritative current value after the change.
         */
        readonly current: GuildRank;
    };
    /**
     * Published when interaction reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "INTERACTION_ENDED": {
        /**
         * Stable identifier of the interaction referenced by this payload.
         */
        readonly interactionId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when interaction starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "INTERACTION_STARTED": {
        /**
         * Stable identifier of the interaction referenced by this payload.
         */
        readonly interactionId: string;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
    };
    /**
     * Published when npc dialogue closes or is no longer available to the local player.
     */
    "NPC_DIALOGUE_CLOSED": {
        /**
         * Authoritative npc value associated with this payload.
         */
        readonly npc: EntityRef;
        /**
         * Stable identifier of the dialogue referenced by this payload.
         */
        readonly dialogueId: number;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when npc dialogue becomes open and available to the local player.
     */
    "NPC_DIALOGUE_OPENED": {
        /**
         * Authoritative npc value associated with this payload.
         */
        readonly npc: EntityRef;
        /**
         * Stable identifier of the dialogue referenced by this payload.
         */
        readonly dialogueId: number;
    };
    /**
     * Published when the authoritative inventory capacity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.
     */
    "INVENTORY_CAPACITY_CHANGED": {
        /**
         * Current number of available inventory slots.
         */
        readonly capacity: number;
        /**
         * Amount consumed or used by the operation.
         */
        readonly used: number;
    };
    /**
     * Published when inventory item is added to the local client's authoritative public state. The payload identifies the newly available object or entity.
     */
    "INVENTORY_ITEM_ADDED": {
        /**
         * Authoritative item value associated with this payload.
         */
        readonly item: ItemStackInfo;
    };
    /**
     * Published when the authoritative 'INVENTORY_ITEM_MOVED' gameplay event occurs. The payload contains only client-visible state intended for Inventory UI and AddOns.
     */
    "INVENTORY_ITEM_MOVED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Source slot index before the item move.
         */
        readonly fromSlot: number;
        /**
         * Destination slot index after the item move.
         */
        readonly toSlot: number;
    };
    /**
     * Published when the authoritative inventory item quantity state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.
     */
    "INVENTORY_ITEM_QUANTITY_CHANGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Authoritative value before the change.
         */
        readonly previous: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
    };
    /**
     * Published when inventory item is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "INVENTORY_ITEM_REMOVED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Current or transferred stack quantity.
         */
        readonly quantity: number;
        /**
         * Optional container slot index associated with the item.
         */
        readonly slot: number | null;
    };
    /**
     * Published when the authoritative inventory layout state changes. The payload contains the resulting state and identifiers needed by Inventory UI or AddOns to update without polling.
     */
    "INVENTORY_LAYOUT_CHANGED": {
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the authoritative item binding state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.
     */
    "ITEM_BINDING_CHANGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Whether the item instance is currently bound.
         */
        readonly isBound: boolean;
    };
    /**
     * Published when item becomes broken in authoritative game state. The payload contains the public context required by consumers.
     */
    "ITEM_BROKEN": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
    };
    /**
     * Published when the authoritative item charge state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.
     */
    "ITEM_CHARGE_CHANGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
        /**
         * Whether the associated gameplay effect is currently active.
         */
        readonly effectActive: boolean;
    };
    /**
     * Published when the authoritative item durability state changes. The payload contains the resulting state and identifiers needed by Item UI or AddOns to update without polling.
     */
    "ITEM_DURABILITY_CHANGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
    };
    /**
     * Published when item is recharged in authoritative game state. The payload contains the public context required by consumers.
     */
    "ITEM_RECHARGED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
    };
    /**
     * Published when item is repaired in authoritative game state. The payload contains the public context required by consumers.
     */
    "ITEM_REPAIRED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
    };
    /**
     * Published when item is used in authoritative game state. The payload contains the public context required by consumers.
     */
    "ITEM_USED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Current or transferred stack quantity.
         */
        readonly quantity: number;
    };
    /**
     * Published after loot or a semantic reward package has actually been granted to the player. It never exposes unrevealed drop-table information.
     */
    "LOOT_GRANTED": {
        /**
         * Optional entity responsible for creating the effect or state change.
         */
        readonly source: EntityRef | null;
        /**
         * Reward package associated with this choice.
         */
        readonly reward: RewardInfo;
    };
    /**
     * Published when the authoritative 'MAIL_ATTACHMENT_CLAIMED' gameplay event occurs. The payload contains only client-visible state intended for Mail UI and AddOns.
     */
    "MAIL_ATTACHMENT_CLAIMED": {
        /**
         * Stable identifier of the mail message.
         */
        readonly mailId: string;
        /**
         * Reward package associated with this choice.
         */
        readonly reward: RewardInfo;
    };
    /**
     * Published when mail expires according to authoritative game state.
     */
    "MAIL_EXPIRED": {
        /**
         * Stable identifier of the mail message.
         */
        readonly mailId: string;
    };
    /**
     * Published when the authoritative mail read state changes. The payload contains the resulting state and identifiers needed by Mail UI or AddOns to update without polling.
     */
    "MAIL_READ_CHANGED": {
        /**
         * Stable identifier of the mail message.
         */
        readonly mailId: string;
        /**
         * Whether the mail has been marked as read.
         */
        readonly isRead: boolean;
    };
    /**
     * Published when mail is received by the local client and becomes available to the relevant UI or AddOn.
     */
    "MAIL_RECEIVED": {
        /**
         * Mail summary visible to the local player.
         */
        readonly mail: MailSummaryInfo;
    };
    /**
     * Published when mail is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "MAIL_REMOVED": {
        /**
         * Stable identifier of the mail message.
         */
        readonly mailId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published after mail has been accepted for sending by the authoritative system.
     */
    "MAIL_SENT": {
        /**
         * Stable identifier of the mail message.
         */
        readonly mailId: string;
        /**
         * Stable recipient identity used for the mail operation.
         */
        readonly recipientIdentity: string;
    };
    /**
     * Published when map copy is successfully applied to authoritative game state.
     */
    "MAP_COPY_APPLIED": {
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Authoritative map version value associated with this payload.
         */
        readonly mapVersion: string;
        /**
         * Signed difference applied by this change.
         */
        readonly delta: MapDiscoveryDelta;
    };
    /**
     * Published when map copy is consumed and the authoritative state reflects that consumption.
     */
    "MAP_COPY_CONSUMED": {
        /**
         * Stable identifier of the concrete item instance.
         */
        readonly itemInstanceGuid: string;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Authoritative map version value associated with this payload.
         */
        readonly mapVersion: string;
    };
    /**
     * Published when map copy is created and becomes visible to the local client.
     */
    "MAP_COPY_CREATED": {
        /**
         * Authoritative item value associated with this payload.
         */
        readonly item: ItemStackInfo;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Authoritative map version value associated with this payload.
         */
        readonly mapVersion: string;
    };
    /**
     * Published when new Fog-of-War cells become discovered. The payload contains only the discovery delta and its authoritative revision.
     */
    "MAP_DISCOVERY_CHANGED": {
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Authoritative map version value associated with this payload.
         */
        readonly mapVersion: string;
        /**
         * Signed difference applied by this change.
         */
        readonly delta: MapDiscoveryDelta;
    };
    /**
     * Published when secret is discovered and becomes legitimately known to the local player.
     */
    "SECRET_DISCOVERED": {
        /**
         * Stable content identifier of the discovered secret.
         */
        readonly secretId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when the authoritative 'DISMOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.
     */
    "DISMOUNTED": {
        /**
         * Stable content identifier of the mount.
         */
        readonly mountId: number;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative 'MOUNTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.
     */
    "MOUNTED": {
        /**
         * Stable content identifier of the mount.
         */
        readonly mountId: number;
    };
    /**
     * Published when the authoritative mount availability state changes. The payload contains the resulting state and identifiers needed by Mount UI or AddOns to update without polling.
     */
    "MOUNT_AVAILABILITY_CHANGED": {
        /**
         * Stable content identifier of the mount.
         */
        readonly mountId: number;
        /**
         * Whether the feature or action is currently available.
         */
        readonly available: boolean;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative 'MOUNT_COLLECTED' gameplay event occurs. The payload contains only client-visible state intended for Mount UI and AddOns.
     */
    "MOUNT_COLLECTED": {
        /**
         * Stable content identifier of the mount.
         */
        readonly mountId: number;
    };
    /**
     * Published when the authoritative player movement speed state changes. The payload contains the resulting state and identifiers needed by Movement UI or AddOns to update without polling.
     */
    "PLAYER_MOVEMENT_SPEED_CHANGED": {
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative value before the change.
         */
        readonly previous: number;
    };
    /**
     * Published when server reconciliation corrects the local player's predicted position. The payload contains the authoritative position and the correction distance.
     */
    "PLAYER_POSITION_CORRECTED": {
        /**
         * Authoritative world-space position.
         */
        readonly position: { x: number; y: number; z: number };
        /**
         * Distance between the predicted and authoritative positions before reconciliation.
         */
        readonly correctionDistance: number;
    };
    /**
     * Published when the authoritative 'COSMETIC_ENTITLEMENTS_SYNCED' gameplay event occurs. The payload contains only client-visible state intended for Platform UI and AddOns.
     */
    "COSMETIC_ENTITLEMENTS_SYNCED": {
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
        /**
         * Timestamp at which ownership was last authoritatively verified.
         */
        readonly verifiedAt: string;
    };
    /**
     * Published after cosmetic entitlement has been authoritatively granted to the local player.
     */
    "COSMETIC_ENTITLEMENT_GRANTED": {
        /**
         * Verified cosmetic-entitlement snapshot.
         */
        readonly entitlement: CosmeticEntitlementInfo;
    };
    /**
     * Published when cosmetic entitlement is authoritatively revoked and should no longer be treated as active or owned.
     */
    "COSMETIC_ENTITLEMENT_REVOKED": {
        /**
         * Verified cosmetic-entitlement snapshot.
         */
        readonly entitlement: CosmeticEntitlementInfo;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative platform auth state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.
     */
    "PLATFORM_AUTH_STATE_CHANGED": {
        /**
         * Current lifecycle state represented by this payload.
         */
        readonly state: PlatformAuthState;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string | null;
    };
    /**
     * Published when the authoritative platform availability state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.
     */
    "PLATFORM_AVAILABILITY_CHANGED": {
        /**
         * Whether the feature or action is currently available.
         */
        readonly available: boolean;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string | null;
    };
    /**
     * Published when the authoritative purchase state state changes. The payload contains the resulting state and identifiers needed by Platform UI or AddOns to update without polling.
     */
    "PURCHASE_STATE_CHANGED": {
        /**
         * Provider-secret-free purchase snapshot.
         */
        readonly purchase: PurchaseInfo;
    };
    /**
     * Published when duel reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "DUEL_ENDED": {
        /**
         * Stable identifier of the duel session.
         */
        readonly duelId: string;
        /**
         * Stable identifier of the winning character when the client is allowed to know it.
         */
        readonly winnerGuid: string | null;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative 'DUEL_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for PvP UI and AddOns.
     */
    "DUEL_REQUESTED": {
        /**
         * Stable identifier of the duel session.
         */
        readonly duelId: string;
        /**
         * Safe reference to the player issuing the duel challenge.
         */
        readonly challenger: EntityRef;
    };
    /**
     * Published when duel request reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "DUEL_REQUEST_ENDED": {
        /**
         * Stable identifier of the duel session.
         */
        readonly duelId: string;
        /**
         * Stable non-localized result code for the operation.
         */
        readonly resultCode: string;
    };
    /**
     * Published when duel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "DUEL_STARTED": {
        /**
         * Stable identifier of the duel session.
         */
        readonly duelId: string;
        /**
         * Safe reference to the opposing player.
         */
        readonly opponent: EntityRef;
        /**
         * Authoritative timestamp at which the operation started.
         */
        readonly startedAt: string;
    };
    /**
     * Published when quest is abandoned by the local player and removed from active progression.
     */
    "QUEST_ABANDONED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
    };
    /**
     * Published when the authoritative 'QUEST_ACCEPTED' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns.
     */
    "QUEST_ACCEPTED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Current lifecycle state represented by this payload.
         */
        readonly state: QuestState;
    };
    /**
     * Published when quest completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "QUEST_COMPLETED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Reward package associated with this choice.
         */
        readonly reward: RewardInfo;
    };
    /**
     * Published when quest fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "QUEST_FAILED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
        /**
         * Whether the failed operation may currently be retried.
         */
        readonly canRetry: boolean;
    };
    /**
     * Published when quest objective completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "QUEST_OBJECTIVE_COMPLETED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Stable identifier of the quest objective.
         */
        readonly objectiveId: number;
        /**
         * Semantic category of the quest objective.
         */
        readonly objectiveType: QuestObjectiveType;
    };
    /**
     * Published when the authoritative quest objective progress state changes. The payload contains the resulting state and identifiers needed by Quest UI or AddOns to update without polling.
     */
    "QUEST_OBJECTIVE_PROGRESS_CHANGED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Current snapshot of the affected quest objective.
         */
        readonly objective: QuestObjectiveProgress;
    };
    /**
     * Published when the authoritative 'QUEST_READY_TO_TURN_IN' gameplay event occurs. The payload contains only client-visible state intended for Quest UI and AddOns.
     */
    "QUEST_READY_TO_TURN_IN": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
    };
    /**
     * Published when quest is reset to its authoritative baseline state.
     */
    "QUEST_RESET": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Authoritative timestamp at which the lockout or state resets.
         */
        readonly resetAt: string;
    };
    /**
     * Published when quest reward choice becomes required before the current flow can continue.
     */
    "QUEST_REWARD_CHOICE_REQUIRED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Available reward choices presented to the player.
         */
        readonly choices: ReadonlyArray<RewardChoiceInfo>;
    };
    /**
     * Published when quest reward choice is selected and accepted by the authoritative game state.
     */
    "QUEST_REWARD_CHOICE_SELECTED": {
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Stable identifier of the selectable reward option.
         */
        readonly choiceId: number;
    };
    /**
     * Published when quest is successfully shared through the authoritative quest or social system.
     */
    "QUEST_SHARED": {
        /**
         * Stable identifier of the share referenced by this payload.
         */
        readonly shareId: string;
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
    };
    /**
     * Published when quest share is received by the local client and becomes available to the relevant UI or AddOn.
     */
    "QUEST_SHARE_RECEIVED": {
        /**
         * Stable identifier of the share referenced by this payload.
         */
        readonly shareId: string;
        /**
         * Stable content identifier of the quest.
         */
        readonly questId: number;
        /**
         * Authoritative sender value associated with this payload.
         */
        readonly sender: EntityRef;
    };
    /**
     * Published when the authoritative reputation state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling.
     */
    "REPUTATION_CHANGED": {
        /**
         * Stable identifier of the reputation-bearing organization or faction.
         */
        readonly organizationId: number;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Signed difference applied by this change.
         */
        readonly delta: number;
    };
    /**
     * Published when the authoritative reputation standing state changes. The payload contains the resulting state and identifiers needed by Reputation UI or AddOns to update without polling.
     */
    "REPUTATION_STANDING_CHANGED": {
        /**
         * Stable identifier of the reputation-bearing organization or faction.
         */
        readonly organizationId: number;
        /**
         * Previous stable standing identifier before the change.
         */
        readonly previousStandingId: string | null;
        /**
         * Current stable standing identifier after the change.
         */
        readonly currentStandingId: string;
    };
    /**
     * Published when the authoritative audio settings state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.
     */
    "AUDIO_SETTINGS_CHANGED": {
        /**
         * Stable identifier of the participating group.
         */
        readonly groupId: string;
        /**
         * Current value represented by this entry.
         */
        readonly value: number;
    };
    /**
     * Published when the authoritative keybind state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.
     */
    "KEYBIND_CHANGED": {
        /**
         * Stable content identifier of the action or ability.
         */
        readonly actionId: string;
        /**
         * Binding-state code exposed by the item system.
         */
        readonly binding: string;
    };
    /**
     * Published when the authoritative locale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.
     */
    "LOCALE_CHANGED": {
        /**
         * Active locale identifier, such as a language-region code.
         */
        readonly locale: string;
    };
    /**
     * Published when the authoritative ui scale state changes. The payload contains the resulting state and identifiers needed by Settings UI or AddOns to update without polling.
     */
    "UI_SCALE_CHANGED": {
        /**
         * Current UI scale multiplier.
         */
        readonly scale: number;
    };
    /**
     * Published when block is added to the local client's authoritative public state. The payload identifies the newly available object or entity.
     */
    "BLOCK_ADDED": {
        /**
         * Stable identifier of the social identity or account-level relationship.
         */
        readonly socialIdentityId: string;
    };
    /**
     * Published when block is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "BLOCK_REMOVED": {
        /**
         * Stable identifier of the social identity or account-level relationship.
         */
        readonly socialIdentityId: string;
    };
    /**
     * Published when friend is added to the local client's authoritative public state. The payload identifies the newly available object or entity.
     */
    "FRIEND_ADDED": {
        /**
         * Stable identifier of the social identity or account-level relationship.
         */
        readonly socialIdentityId: string;
        /**
         * Display name safe for presentation to the local player.
         */
        readonly displayName: string;
    };
    /**
     * Published when the authoritative friend presence state changes. The payload contains the resulting state and identifiers needed by Social UI or AddOns to update without polling.
     */
    "FRIEND_PRESENCE_CHANGED": {
        /**
         * Stable identifier of the social identity or account-level relationship.
         */
        readonly socialIdentityId: string;
        /**
         * Whether the member is currently online.
         */
        readonly online: boolean;
        /**
         * Stable identifier of the relevant location.
         */
        readonly locationId: number | null;
    };
    /**
     * Published when friend is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "FRIEND_REMOVED": {
        /**
         * Stable identifier of the social identity or account-level relationship.
         */
        readonly socialIdentityId: string;
    };
    /**
     * Published when the authoritative 'SPELL_CAST_COMMITTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.
     */
    "SPELL_CAST_COMMITTED": {
        /**
         * Stable identifier of this cast lifecycle.
         */
        readonly castId: string;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef | null;
    };
    /**
     * Published when spell cast fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "SPELL_CAST_FAILED": {
        /**
         * Stable identifier of this cast lifecycle.
         */
        readonly castId: string | null;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef;
        /**
         * Stable semantic reason associated with the event.
         */
        readonly reason: CastFailureReason;
    };
    /**
     * Published when the authoritative 'SPELL_CAST_INTERRUPTED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.
     */
    "SPELL_CAST_INTERRUPTED": {
        /**
         * Stable identifier of this cast lifecycle.
         */
        readonly castId: string;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef;
        /**
         * Stable semantic reason associated with the event.
         */
        readonly reason: CastInterruptReason;
        /**
         * Entity responsible for the interrupt.
         */
        readonly interrupter: EntityRef | null;
    };
    /**
     * Published when the authoritative game state accepts and starts a spell or ability cast. The payload contains the initial cast snapshot required by cast bars and related UI.
     */
    "SPELL_CAST_STARTED": {
        /**
         * Authoritative cast value associated with this payload.
         */
        readonly cast: SpellCastInfo;
    };
    /**
     * Published when the authoritative 'SPELL_CAST_SUCCEEDED' gameplay event occurs. The payload contains only client-visible state intended for Spell UI and AddOns.
     */
    "SPELL_CAST_SUCCEEDED": {
        /**
         * Stable identifier of this cast lifecycle.
         */
        readonly castId: string;
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Entity that initiated the cast.
         */
        readonly caster: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef | null;
    };
    /**
     * Published when spell cooldowns is reset to its authoritative baseline state.
     */
    "SPELL_COOLDOWNS_RESET": {
        /**
         * Stable content identifiers of the spells affected by the update.
         */
        readonly spellIds: ReadonlyArray<number>;
    };
    /**
     * Published when spell cooldown reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "SPELL_COOLDOWN_ENDED": {
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
    };
    /**
     * Published when spell cooldown starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "SPELL_COOLDOWN_STARTED": {
        /**
         * Stable content identifier of the spell or ability.
         */
        readonly spellId: number;
        /**
         * Authoritative timestamp at which the operation started.
         */
        readonly startedAt: string;
        /**
         * Optional authoritative timestamp at which the operation is expected to end.
         */
        readonly endsAt: string;
    };
    /**
     * Published when calculated player stats have changed and consumers should refresh their stat snapshot. The revision can be used to reject stale cached data.
     */
    "PLAYER_STATS_CHANGED": {
        /**
         * Calculated stat entries included in this state snapshot.
         */
        readonly stats: ReadonlyArray<StatValue>;
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the account's visible character roster changes. The revision allows UI to invalidate and refresh a cached roster snapshot.
     */
    "CHARACTER_ROSTER_CHANGED": {
        /**
         * Monotonically increasing revision number used to detect stale cached state.
         */
        readonly revision: number;
    };
    /**
     * Published when the authoritative character selection state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.
     */
    "CHARACTER_SELECTION_CHANGED": {
        /**
         * Stable identifier of the character.
         */
        readonly characterGuid: string | null;
    };
    /**
     * Published when the authoritative connection state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.
     */
    "CONNECTION_STATE_CHANGED": {
        /**
         * Current lifecycle state represented by this payload.
         */
        readonly state: ConnectionState;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string | null;
    };
    /**
     * Published when the client receives a global announcement that is intended to be shown to the player.
     */
    "GLOBAL_ANNOUNCEMENT_RECEIVED": {
        /**
         * Delivered or rejected chat-message payload.
         */
        readonly message: string;
        /**
         * Stable, non-localized severity classification.
         */
        readonly severityCode: string;
    };
    /**
     * Published when the authoritative loading state state changes. The payload contains the resulting state and identifiers needed by System UI or AddOns to update without polling.
     */
    "LOADING_STATE_CHANGED": {
        /**
         * Current lifecycle state represented by this payload.
         */
        readonly state: LoadingState;
        /**
         * Stable context identifier describing the operation that changed state.
         */
        readonly context: string | null;
    };
    /**
     * Published when reconnect completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "RECONNECT_COMPLETED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when reconnect fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "RECONNECT_FAILED": {
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
        /**
         * Whether the client or runtime intends to retry automatically.
         */
        readonly willRetry: boolean;
    };
    /**
     * Published when reconnect starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "RECONNECT_STARTED": {
        /**
         * Current retry attempt number.
         */
        readonly attempt: number;
    };
    /**
     * Published when world entry completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "WORLD_ENTRY_COMPLETED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Optional public identifier of the active world layer.
         */
        readonly layerId: string | null;
    };
    /**
     * Published when world entry fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "WORLD_ENTRY_FAILED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number | null;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when world entry starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "WORLD_ENTRY_STARTED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when trade is cancelled before normal completion. The payload identifies the cancelled lifecycle and any public reason information.
     */
    "TRADE_CANCELLED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when trade completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "TRADE_COMPLETED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
    };
    /**
     * Published when the authoritative trade confirmation state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling.
     */
    "TRADE_CONFIRMATION_CHANGED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Revision number of the trade offer used to detect stale confirmations.
         */
        readonly offerVersion: number;
        /**
         * Authoritative player guid value associated with this payload.
         */
        readonly playerGuid: string;
        /**
         * Whether the participant has confirmed the current offer version.
         */
        readonly confirmed: boolean;
    };
    /**
     * Published when trade fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "TRADE_FAILED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative trade offer state changes. The payload contains the resulting state and identifiers needed by Trade UI or AddOns to update without polling.
     */
    "TRADE_OFFER_CHANGED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Revision number of the trade offer used to detect stale confirmations.
         */
        readonly offerVersion: number;
        /**
         * Authoritative player guid value associated with this payload.
         */
        readonly playerGuid: string;
        /**
         * Current trade offer snapshot.
         */
        readonly offer: TradeOfferInfo;
    };
    /**
     * Published when the authoritative 'TRADE_REQUESTED' gameplay event occurs. The payload contains only client-visible state intended for Trade UI and AddOns.
     */
    "TRADE_REQUESTED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Safe reference to the entity that initiated the request.
         */
        readonly requester: EntityRef;
        /**
         * Optional entity targeted by the action or cast.
         */
        readonly target: EntityRef;
    };
    /**
     * Published when trade starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "TRADE_STARTED": {
        /**
         * Stable identifier of the direct-trade session.
         */
        readonly tradeId: string;
        /**
         * Authoritative participants value associated with this payload.
         */
        readonly participants: ReadonlyArray<EntityRef>;
    };
    /**
     * Published when the local target binding changes, including when a new entity becomes targeted or the target is cleared. Consumers should treat the payload as the authoritative target identity snapshot.
     */
    "TARGET_CHANGED": {
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string | null;
        /**
         * High-level public category of the referenced entity.
         */
        readonly entityType: EntityType | null;
        /**
         * Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn.
         */
        readonly spawnGeneration: number | null;
    };
    /**
     * Published when unit is added to the local client's authoritative public state. The payload identifies the newly available object or entity.
     */
    "UNIT_ADDED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * High-level public category of the referenced entity.
         */
        readonly entityType: EntityType;
        /**
         * Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn.
         */
        readonly spawnGeneration: number;
    };
    /**
     * Published when the authoritative unit combat state state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling.
     */
    "UNIT_COMBAT_STATE_CHANGED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Current lifecycle state represented by this payload.
         */
        readonly state: UnitCombatState;
    };
    /**
     * Published when the authoritative health of an addressable unit changes. The payload contains the resulting current and maximum health values for the affected unit token.
     */
    "UNIT_HEALTH_CHANGED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
    };
    /**
     * Published when the authoritative unit level state changes. The payload contains the resulting state and identifiers needed by Unit UI or AddOns to update without polling.
     */
    "UNIT_LEVEL_CHANGED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Current authoritative level.
         */
        readonly level: number;
    };
    /**
     * Published when unit is removed from the local client's authoritative public state. Consumers should discard matching cached or UI state.
     */
    "UNIT_REMOVED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Lifecycle generation of the entity binding. It changes when an identity is reused for a new runtime spawn.
         */
        readonly spawnGeneration: number;
    };
    /**
     * Published when an addressable unit's public ability resource changes. The payload identifies the resource type and its resulting current and maximum values.
     */
    "UNIT_RESOURCE_CHANGED": {
        /**
         * Forge unit token whose public state is being described.
         */
        readonly unit: string;
        /**
         * Stable identifier of the affected entity.
         */
        readonly guid: string;
        /**
         * Resource pool whose value changed.
         */
        readonly powerType: PowerType;
        /**
         * Authoritative current value after the change.
         */
        readonly current: number;
        /**
         * Authoritative maximum value after the change.
         */
        readonly max: number;
    };
    /**
     * Published when vendor purchase completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "VENDOR_PURCHASE_COMPLETED": {
        /**
         * Safe reference to the vendor involved in the transaction.
         */
        readonly vendor: EntityRef;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Current or transferred stack quantity.
         */
        readonly quantity: number;
        /**
         * Total price paid in the game's smallest public currency unit.
         */
        readonly totalPrice: number;
    };
    /**
     * Published when vendor sale completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "VENDOR_SALE_COMPLETED": {
        /**
         * Safe reference to the vendor involved in the transaction.
         */
        readonly vendor: EntityRef;
        /**
         * Stable content identifier of the item definition.
         */
        readonly itemId: number;
        /**
         * Current or transferred stack quantity.
         */
        readonly quantity: number;
        /**
         * Total currency received in the game's smallest public currency unit.
         */
        readonly totalReceived: number;
    };
    /**
     * Published when the authoritative area state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.
     */
    "AREA_CHANGED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the associated world area.
         */
        readonly areaId: number;
        /**
         * Stable identifier of the subzone referenced by this payload.
         */
        readonly subzoneId: number | null;
    };
    /**
     * Published when the authoritative bind point state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.
     */
    "BIND_POINT_CHANGED": {
        /**
         * Stable identifier of the current bind point.
         */
        readonly bindPointId: number;
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when fast travel completes successfully in the authoritative game state. The payload describes the final result that is safe for the local client to consume.
     */
    "FAST_TRAVEL_COMPLETED": {
        /**
         * Stable identifier of the fast-travel operation.
         */
        readonly travelId: string;
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
        /**
         * Authoritative world-space position.
         */
        readonly position: { x: number; y: number; z: number };
    };
    /**
     * Published when fast travel fails before reaching a successful final state. The payload includes stable context or reason information when available.
     */
    "FAST_TRAVEL_FAILED": {
        /**
         * Stable identifier of the fast-travel operation.
         */
        readonly travelId: string | null;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when fast travel starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "FAST_TRAVEL_STARTED": {
        /**
         * Stable identifier of the fast-travel operation.
         */
        readonly travelId: string;
        /**
         * Stable identifier of the travel destination.
         */
        readonly destinationId: number;
        /**
         * Currency cost paid for the operation.
         */
        readonly cost: number;
    };
    /**
     * Published when the authoritative floor access state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.
     */
    "FLOOR_ACCESS_CHANGED": {
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Whether the referenced feature is currently unlocked.
         */
        readonly unlocked: boolean;
        /**
         * Stable, non-localized reason or error code when additional context is available.
         */
        readonly reasonCode: string;
    };
    /**
     * Published when the authoritative floor state changes. The payload contains the resulting state and identifiers needed by World UI or AddOns to update without polling.
     */
    "FLOOR_CHANGED": {
        /**
         * Previous floor identifier before the transition.
         */
        readonly previousFloorId: number | null;
        /**
         * Current floor identifier after the transition.
         */
        readonly currentFloorId: number;
        /**
         * Stable content identifier of the relevant map.
         */
        readonly mapId: number;
    };
    /**
     * Published when world event reaches its final end state. The payload identifies the affected lifecycle instance and its final public result when applicable.
     */
    "WORLD_EVENT_ENDED": {
        /**
         * Stable identifier of the runtime world-event instance.
         */
        readonly worldEventId: string;
        /**
         * Stable non-localized result code for the operation.
         */
        readonly resultCode: string;
    };
    /**
     * Published when world event starts in the authoritative game state. Consumers may use this event to initialize related UI, timers, or temporary state.
     */
    "WORLD_EVENT_STARTED": {
        /**
         * Public snapshot of the world event.
         */
        readonly worldEvent: WorldEventInfo;
    };
    /**
     * Published when the public state of world event is updated. The payload contains the latest authoritative snapshot or delta required by consumers.
     */
    "WORLD_EVENT_UPDATED": {
        /**
         * Public snapshot of the world event.
         */
        readonly worldEvent: WorldEventInfo;
    };
    /**
     * Published when world portal closes or is no longer available to the local player.
     */
    "WORLD_PORTAL_CLOSED": {
        /**
         * Stable identifier of the temporary world portal.
         */
        readonly portalId: number;
    };
    /**
     * Published when world portal becomes open and available to the local player.
     */
    "WORLD_PORTAL_OPENED": {
        /**
         * Stable identifier of the temporary world portal.
         */
        readonly portalId: number;
        /**
         * Stable content identifier of the relevant floor.
         */
        readonly floorId: number;
        /**
         * Authoritative timestamp at which the portal is scheduled to close.
         */
        readonly closesAt: string | null;
    };
}

declare namespace Forge {
    namespace Events {
        /**
         * Subscribes to an enabled Forge event. The callback receives the payload type associated with the selected event name.
         *
         * @returns A callback that unregisters this exact subscription.
         */
        function on<K extends keyof ForgeEventMap>(eventName: K, callback: (payload: ForgeEventMap[K]) => void): ForgeUnsubscribe;

        /**
         * Removes a subscription registered with Forge.Events.on when the same callback reference is supplied.
         */
        function off<K extends keyof ForgeEventMap>(eventName: K, callback: (payload: ForgeEventMap[K]) => void): void;

        /**
         * Subscribes through the current unit-filter helper. This declaration intentionally remains broad until the canonical unit-filter contract is redesigned without the removed legacy Forge State/UnitRegistry layer.
         *
         * @returns A callback that unregisters this exact subscription.
         */
        function onUnit<K extends keyof ForgeEventMap>(eventName: K, unitToken: string, callback: (payload: ForgeEventMap[K]) => void): ForgeUnsubscribe;
    }
}
