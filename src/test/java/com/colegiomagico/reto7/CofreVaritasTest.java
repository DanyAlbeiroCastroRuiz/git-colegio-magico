package com.colegiomagico.reto7;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CofreVaritasTest {

    @Test
    public void testVaritaMasPoderosa() {
        int[] varitas = {10, 15, 20, 12};
        assertEquals(20, CofreVaritas.varitaMasPoderosa(varitas));
    }
}
