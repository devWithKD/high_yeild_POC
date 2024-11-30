"use server";

import { connectMongoose } from "@/lib/db";
import Unit from "@/models/unit.model";
import { UnitInterface } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function getUnits(): Promise<Array<Partial<UnitInterface>>> {
    await connectMongoose();
    const units = await Unit.find().lean();
    return units;
}

export async function createUnit(
    unit: Partial<UnitInterface>,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    const existingUnit = await Unit.findOne({ name: unit.name });
    if (existingUnit) throw new Error("Unit Alredy Exists");
    const newUnit = new Unit(unit);
    await newUnit.save();
    revalidatePath(path);
    return null;
}

export async function updateUnit(
    updatedUnit: Partial<UnitInterface>,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    const existingUnit = await Unit.findById(updatedUnit.id);
    if (!existingUnit) throw new Error("Unit does not exist");
    // eslint-disable-next-line
    const { id, ...data } = updatedUnit;
    await existingUnit.updateOne(data);
    revalidatePath(path);
    return null;
}

export async function deleteUnit(
    unitID: string,
    path: string,
): Promise<null | Error> {
    await connectMongoose();
    const unitToDelete = await Unit.findById(unitID);
    if (!unitToDelete) throw new Error("Unit does not exist");
    revalidatePath(path);
    return null;
}
