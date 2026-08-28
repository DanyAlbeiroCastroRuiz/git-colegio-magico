package com.colegiomagico.reto4;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class DefensaCondicionalTest {

    @Test
    public void testEvaluar() {
        assertEquals("Maldicion", DefensaCondicional.evaluar("Crucio"));
        assertEquals("Permitido", DefensaCondicional.evaluar("Lumos"));
    }
}
