import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // z1
        System.out.println("Zadanie 1");
        System.out.println("wiek " + dajWiek());

        // z2
        System.out.println("\nZadanie 2");
        System.out.println("imie " + dajImie());

        // z3
        System.out.println("\nZadanie 3");
        oblicz(10, 5);

        // z4
        System.out.println("\nZadanie 4");
        System.out.println("czy parzysta " + czyParzysta(8));

        // z5
        System.out.println("\nZadanie 5");
        System.out.println("czy przez 3 i 5 " + czyPrzez3i5(15));

        // z6
        System.out.println("\nZadanie 6");
        System.out.println("do potegi 3 " + potega3(4));

        // z7
        System.out.println("\nZadanie 7");
        System.out.println("pierwiastek " + pierwiastek(25));

        // z8
        System.out.println("\nZadanie 8");
        System.out.println("czy prostokatny " + czyProstokatny(3, 4, 5));

        // z9
        System.out.println("\nZadanie 9");
        System.out.println("ostatni znak " + dajOstatni("Witaj"));

        // z10
        System.out.println("\nZadanie 10");
        System.out.println("czy palindrom " + czyPalindrom("Kajak"));

        // z11
        System.out.println("\nZadanie 11");
        int[] tab = {1, 7, 20, 100};
        System.out.println("suma tablicy " + sumaTablicy(tab));

        // z12
        System.out.println("\nZadanie 12");
        int liczbaLiterA = zliczWystapienia("Ala ma kota", 'a');
        System.out.println("liczba liter a " + liczbaLiterA);
    }

    // z1
    public static int dajWiek() {
        return 18; 
    }

    // z2
    public static String dajImie() {
        return "Jan"; 
    }

    // z3
    public static void oblicz(int a, int b) {
        System.out.println("suma " + (a + b));
        System.out.println("roznica " + (a - b));
        System.out.println("iloczyn " + (a * b));
    }

    // z4
    public static boolean czyParzysta(int l) {
        return l % 2 == 0;
    }

    // z5
    public static boolean czyPrzez3i5(int l) {
        return l % 3 == 0 && l % 5 == 0;
    }

    // z6
    public static double potega3(double l) {
        return l * l * l;
    }

    // z7
    public static double pierwiastek(double l) {
        return Math.sqrt(l);
    }

    // z8
    public static boolean czyProstokatny(double a, double b, double c) {
        double[] boki = {a, b, c};
        Arrays.sort(boki); 
        return (boki[0] * boki[0] + boki[1] * boki[1] == boki[2] * boki[2]);
    }

    // z9
    public static char dajOstatni(String s) {
        if (s == null || s.isEmpty()) return ' ';
        return s.charAt(s.length() - 1);
    }

    // z10
    public static boolean czyPalindrom(String s) {
        if (s == null) return false;
        String t = s.toLowerCase();
        for (int i = 0; i < t.length() / 2; i++) {
            if (t.charAt(i) != t.charAt(t.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // z11
    public static int sumaTablicy(int[] t) {
        int suma = 0;
        for (int n : t) {
            suma += n;
        }
        return suma;
    }

    // z12
    public static int zliczWystapienia(String s, char z) {
        if (s == null) return 0;
        int licznik = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == z) {
                licznik++;
            }
        }
        return licznik;
    }
}
