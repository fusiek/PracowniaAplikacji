import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // Za1
        System.out.println("Zadanie 1");
        System.out.println("Ania");
        System.out.println("Bartek");
        System.out.println("Kasia");

        // Za2
        System.out.println("\nZadanie 2 i 3");
        String imie = "Jan";
        int rokUrodzenia = 2008;
        double zmienna066 = 0.66;
        
        // Z3
        int obecnyRok = 2026;
        int wiek = obecnyRok - rokUrodzenia;
        System.out.println("Mam na imie " + imie + " mam " + wiek + " lat i bede pisac mature za " + zmienna066 + " roku");

        // Z4
        System.out.println("\nZadanie 4");
        System.out.print("podaj temp w C ");
        double stopnie = scan.nextDouble();
        double stopnieFahrenheita = 1.8 * stopnie + 32.0;
        System.out.println("temp w F wynosi " + stopnieFahrenheita);

        // Z5
        System.out.println("\nZadanie 5");
        System.out.print("podaj bok a ");
        double bokA = scan.nextDouble();
        System.out.print("podaj bok b ");
        double bokB = scan.nextDouble();
        System.out.print("podaj bok c ");
        double bokC = scan.nextDouble();
        double obwod = bokA + bokB + bokC;
        System.out.println("obwod trojkata " + obwod);

        // Zad6
        System.out.println("\nZadanie 6");
        System.out.print("slowo 1 ");
        String slowo1 = scan.next();
        System.out.print("slowo 2 ");
        String slowo2 = scan.next();
        System.out.print("slowo 3 ");
        String slowo3 = scan.next();
        System.out.println(slowo3 + " " + slowo2 + " " + slowo1);

        // Z7
        System.out.println("\nZadanie 7");
        System.out.print("podaj wyraz ");
        String wyraz = scan.next();
        System.out.println("liczba znakow " + wyraz.length());

        // Z8
        System.out.println("\nZadanie 8");
        int x = 5;
        int y = 2;
        double wynik = (double) x / y
        System.out.println("wynik dzielenia " + wynik);

        // Z9
        System.out.println("\nZadanie 9");
        scan.nextLine(); 
        System.out.print("wpisz slowo do duzych liter ");
        String slowoDoZamiany = scan.nextLine();
        System.out.println("wynik " + slowoDoZamiany.toUpperCase());

        // z10
        System.out.println("\nZadanie 10");
        System.out.print("podaj promien kola ");
        int promien = scan.nextInt();
        double poleKola = Math.PI * promien * promien;
        System.out.println("pole kola " + poleKola);

        scan.close();
    }
}
