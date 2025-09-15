import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * /api/food:
 *    get:
 *      description: get food
 *      responses:
 *          200:
 *              description: OK
 */
router.get("/food", (req: Request, res: Response) => {
    return res.send({ message: "food!" });
});

/**
 * @swagger
 * /api/test:
 *    get:
 *      description: get test
 *      responses:
 *          200:
 *              description: OK
 */
router.get('/test', (req: Request, res: Response) => {
    return res.json({ message: 'Hello world!'});
});

export default router;
