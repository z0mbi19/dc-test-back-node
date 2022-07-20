import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function storePerson(req: Request, res: Response) {
  const body = { ...req.body };
  await prisma.person.create({
    data: { ...body },
  });

  return res.sendStatus(200);
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
  await prisma.person.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.sendStatus(200);
}

export async function allPerson(req: Request, res: Response) {
  const result = await prisma.person.findMany();

  function getAge(dateString: any) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const age = result.map((x) => {
    return {
      id: x.id,
      nome: x.nome,
      dtNascimento: x.dtNascimento && x.dtNascimento.toString(),
      idade: getAge(x.dtNascimento),
      createAt: x.createAt,
    };
  });
  res.json(age);
}

export async function indexPerson(req: Request, res: Response) {
  const body = { ...req.body };
  const result = await prisma.person.findFirst({
    where: { id: body.id },
  });

  res.json(result);
}
