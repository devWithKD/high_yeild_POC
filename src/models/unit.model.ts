import mongoose, { Schema } from "mongoose";

export interface UnitDoc extends Document {
    name: string;
    type: string;
    assetValue: number;
    investedValue: number;
    profitLoss: number;
}

const UnitSchema: Schema<UnitDoc> = new Schema({
    name: String,
    type: String,
    assetValue: Number,
    investedValue: Number,
    profitLoss: Number,
});

const Unit =
    (mongoose.models.units as mongoose.Model<UnitDoc>) ||
    mongoose.model("unit", UnitSchema);

export default Unit;
