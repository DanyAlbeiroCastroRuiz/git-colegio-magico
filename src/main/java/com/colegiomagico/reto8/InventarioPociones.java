package com.colegiomagico.reto8;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Filtra la lista de ingredientes devolviendo solo aquellos que empiezan con 'A'.
 */
public class InventarioPociones {

    public static java.util.List<String> filtrar(java.util.List<String> ingredientes) {
        
        java.util.List<String> resultado = ingredientes.stream()
            .filter(n -> n.toLowerCase().startsWith("a"))
            .collect(Collectors.toList());
            return resultado;
    }

    public static void main(String[] args) {
        java.util.List<String> lista = java.util.Arrays.asList("Ajenjo", "Miel");
        System.out.println("Filtrados: " + filtrar(lista));
    }
}
