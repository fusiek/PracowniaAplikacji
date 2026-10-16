import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Random rand = new Random();

        // z1
        System.out.println("Zadanie 1");
        System.out.print("podaj liczbe ");
        int doLiczby = scan.nextInt();
        for (int i = 1; i <= doLiczby; i += 2) {
            System.out.print(i + (i + 2 <= doLiczby ? ", " : ""));
        }
        System.out.println();

        // z2
        System.out.println("\nZadanie 2");
        System.out.print("podaj n ");
        int potegaN = scan.nextInt();
        int potega = 1;
        while (potega <= potegaN) {
            System.out.println(potega);
            potega *= 2;
        }

        // z3
        System.out.println("\nZadanie 3");
        int suma3 = 0;
        int liczba3;
        do {
            System.out.print("podaj liczbe 0 konczy ");
            liczba3 = scan.nextInt();
            suma3 += liczba3;
        } while (liczba3 != 0);
        System.out.println("suma wynosi " + suma3);

        // z4
        System.out.println("\nZadanie 4");
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int suma4 = 0;
        int licznik4 = 0;
        while (true) {
            System.out.print("podaj liczbe 0 konczy ");
            int l4 = scan.nextInt();
            if (l4 == 0) break;
            if (l4 < min) min = l4;
            if (l4 > max) max = l4;
            suma4 += l4;
            licznik4++;
        }
        if (licznik4 > 0) {
            int sumaMinMax = min + max;
            double srednia = (double) suma4 / licznik4;
            System.out.println("suma min i max " + sumaMinMax);
            System.out.println("srednia " + srednia);
        } else {
            System.out.println("brak danych");
        }

        // z5
        System.out.println("\nZadanie 5");
        int wylosowana = rand.nextInt(100) + 1;
        int strzal;
        System.out.println("zgadnij liczbe od 1 do 100");
        do {
            System.out.print("twoj strzal ");
            strzal = scan.nextInt();
            if (strzal > wylosowana) {
                System.out.println("Podales za duza wartosc");
            } else if (strzal < wylosowana) {
                System.out.println("Podales za mala wartosc");
            } else {
                System.out.println("Gratulacje");
            }
        } while (strzal != wylosowana);

        // z6
        System.out.println("\nZadanie 6");
        System.out.print("podaj znak ");
        char zn = scan.next().charAt(0);
        System.out.print("podaj x i y rogu ");
        int posX = scan.nextInt();
        int posY = scan.nextInt();
        System.out.print("podaj boki a i b ");
        int bokA = scan.nextInt();
        int bokB = scan.nextInt();

        
        for (int i = 1; i < posY; i++) {
            System.out.println(">");
        }
        for (int i = 0; i < bokA; i++) {
            System.out.print(">");
            for (int j = 1; j < posX; j++) {
                System.out.print(" ");
            }
            for (int j = 0; j < bokB; j++) {
                System.out.print(zn);
            }
            System.out.println();
        }

        // z7
        System.out.println("\nZadanie 7");
        System.out.print("podaj wysokosc choinki ");
        int h = scan.nextInt();
        for (int i = 1; i <= h; i++) {
            for (int j = 1; j <= h - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // z8
        System.out.println("\nZadanie 8");
        System.out.print("podaj liczbe do silni ");
        int s = scan.nextInt();
        long silnia = 1;
        for (int i = 1; i <= s; i++) {
            silnia *= i;
        }
        System.out.println("silnia wynosi " + silnia);

        // z9
        System.out.println("\nZadanie 9");
        System.out.print("podaj slowo ");
        String slowo = scan.next();
        boolean jestPalindromem = true;
        for (int i = 0; i < slowo.length() / 2; i++) {
            if (slowo.charAt(i) != slowo.charAt(slowo.length() - 1 - i)) {
                jestPalindromem = false;
                break;
            }
        }
        if (jestPalindromem) {
            System.out.println("slowo jest palindromem");
        } else {
            System.out.println("slowo nie jest palindromem");
        }

        // z10
        System.out.println("\nZadanie 10");
        glownaPetla:
        for (int i = 1; i <= 10; i++) {
            if (i % 2 != 0) {
                continue;
            }
            for (int j = 1; j <= 10; j++) {
                System.out.println("i=" + i + " j=" + j);
                if (j > i) {
                    continue glownaPetla;
                }
            }
        }

        scan.close();
    }
}
