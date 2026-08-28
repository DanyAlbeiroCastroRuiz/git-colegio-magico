package com.colegiomagico.reto5;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ConteoMagicoTest {

    @Test
    public void testContar() {
        assertEquals(10, ConteoMagico.contar(4)); // 1+2+3+4 = 10
        assertEquals(0, ConteoMagico.contar(0));
    }
}
