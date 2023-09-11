import { Request, Response } from "express";
import { SessionReturn } from "../interfaces/session.interfaces";
import { createLoginService } from "../services/sessions.services";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: SessionReturn = await createLoginService(req.body);

  return res.status(201).json(token);
};
