import { Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        mensaje:'Todo esta bien !!'
    });
});

router.post('/mensajes/:id',(req: Request, res: Response)=>{
    // Traemos el body del request
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    // Parametros
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;