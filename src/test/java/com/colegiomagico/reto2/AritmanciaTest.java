package com.colegiomagico.reto2;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AritmanciaTest {

    @Test
    public void testSumar() {
        assertEquals(5, Aritmancia.sumar(2, 3), "2 + 3 debe ser 5");
        assertEquals(-1, Aritmancia.sumar(4, -5), "4 + (-5) debe ser -1");
    }
}
