package com.colegiomagico.reto9;

/**
 * Retorna una cadena formateada: 'Familiar: [tipo] llamado [nombre]'.
 */
public class InvocacionFamiliar {

    public static String invocar(String nombre, String tipo) {
        return "Familiar: "+tipo+" llamado "+nombre; //
    }

    public static void main(String[] args) {
        System.out.println(invocar("Hedwig", "Lechuza"));
    }
}
