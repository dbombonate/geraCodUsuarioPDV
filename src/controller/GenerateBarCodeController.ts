import { Request, Response } from 'express';

import { GenerateBarCodeService } from '../service/GenerateBarCodeService';

class GenerateBarCodeController {
  async handle(req: Request, res: Response) {

    const {store, operator} = req.body;

    const generateBarCodeService = new GenerateBarCodeService();

    const barCode = await generateBarCodeService.execute({store, operator});

    return res.status(200).send(barCode);
  }
}

export { GenerateBarCodeController };
