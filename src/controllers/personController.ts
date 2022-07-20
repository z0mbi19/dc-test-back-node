import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function storePerson(req: Request, res: Response) {
  const body = { ...req.body };
  const result = await prisma.person.create({
    data: { ...body },
  });

  res.json(result);
}

export async function updatePerson(req: Request, res: Response) {
  const body = { ...req.body };
  const result = await prisma.person.update({
    where: { id: body.id },
    data: { ...body },
  });

  res.json(result);
}

export async function deletePerson(req: Request, res: Response) {
  const body = { ...req.body };
  const result = await prisma.person.delete({
    where: { id: body.id },
  });

  res.json(result);
}

export async function allPerson(req: Request, res: Response) {
  const result = await prisma.person.findMany();

  res.json(result);
}

export async function indexPerson(req: Request, res: Response) {
  const body = { ...req.body };
  const result = await prisma.person.findFirst({
    where: { id: body.id },
  });

  res.json(result);
}
