module.exports = class Data1645108063788 {
  name = 'Data1645108063788'

  async up(db) {
    await db.query(`CREATE TABLE "substrate_balance_transfer" ("id" character varying NOT NULL, "network" character varying(8) NOT NULL, "symbol" text NOT NULL, "decimals" integer NOT NULL, "to_account_balance_at_block" numeric NOT NULL, "from_account_balance_at_block" numeric NOT NULL, "amount" numeric NOT NULL, "tip" numeric NOT NULL, "block_number" numeric NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "to_id" character varying NOT NULL, "from_id" character varying NOT NULL, CONSTRAINT "PK_d488f127bbee114b748a65c0a1c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_e654ea0583a50430430a809e7d" ON "substrate_balance_transfer" ("to_id") `)
    await db.query(`CREATE INDEX "IDX_95971b2db96accf594426e9798" ON "substrate_balance_transfer" ("from_id") `)
    await db.query(`CREATE TABLE "substrate_treasury_deposit" ("id" character varying NOT NULL, "network" character varying(8) NOT NULL, "symbol" text NOT NULL, "decimals" integer NOT NULL, "account_balance_at_block" numeric NOT NULL, "amount" numeric NOT NULL, "block_number" numeric NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "depositor_id" character varying NOT NULL, CONSTRAINT "PK_d79dce4ef536dbd248fd23c3493" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_40a8cbaec489c5f87928955c97" ON "substrate_treasury_deposit" ("depositor_id") `)
    await db.query(`CREATE TABLE "substrate_balance_account" ("id" character varying NOT NULL, "account" text NOT NULL, "root_account" text NOT NULL, "network" character varying(8) NOT NULL, "symbol" text NOT NULL, "decimals" integer NOT NULL, "balance" numeric NOT NULL, "first_transfer_in_date" TIMESTAMP WITH TIME ZONE, "first_transfer_in_block_number" numeric, "first_transfer_out_date" TIMESTAMP WITH TIME ZONE, "first_transfer_out_block_number" numeric, "last_transfer_in_date" TIMESTAMP WITH TIME ZONE, "last_transfer_in_block_number" numeric, "last_transfer_out_date" TIMESTAMP WITH TIME ZONE, "last_transfer_out_block_number" numeric, "total_transfers" integer NOT NULL, CONSTRAINT "PK_d1d216881f9fb7f16406feb31ac" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_60a0f5d2146a44ab0225533b45" ON "substrate_balance_account" ("account") `)
    await db.query(`CREATE INDEX "IDX_7fb58652b5e442b900d47c55fa" ON "substrate_balance_account" ("root_account") `)
    await db.query(`ALTER TABLE "substrate_balance_transfer" ADD CONSTRAINT "FK_e654ea0583a50430430a809e7d9" FOREIGN KEY ("to_id") REFERENCES "substrate_balance_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "substrate_balance_transfer" ADD CONSTRAINT "FK_95971b2db96accf594426e97982" FOREIGN KEY ("from_id") REFERENCES "substrate_balance_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "substrate_treasury_deposit" ADD CONSTRAINT "FK_40a8cbaec489c5f87928955c971" FOREIGN KEY ("depositor_id") REFERENCES "substrate_balance_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "substrate_balance_transfer"`)
    await db.query(`DROP INDEX "public"."IDX_e654ea0583a50430430a809e7d"`)
    await db.query(`DROP INDEX "public"."IDX_95971b2db96accf594426e9798"`)
    await db.query(`DROP TABLE "substrate_treasury_deposit"`)
    await db.query(`DROP INDEX "public"."IDX_40a8cbaec489c5f87928955c97"`)
    await db.query(`DROP TABLE "substrate_balance_account"`)
    await db.query(`DROP INDEX "public"."IDX_60a0f5d2146a44ab0225533b45"`)
    await db.query(`DROP INDEX "public"."IDX_7fb58652b5e442b900d47c55fa"`)
    await db.query(`ALTER TABLE "substrate_balance_transfer" DROP CONSTRAINT "FK_e654ea0583a50430430a809e7d9"`)
    await db.query(`ALTER TABLE "substrate_balance_transfer" DROP CONSTRAINT "FK_95971b2db96accf594426e97982"`)
    await db.query(`ALTER TABLE "substrate_treasury_deposit" DROP CONSTRAINT "FK_40a8cbaec489c5f87928955c971"`)
  }
}
