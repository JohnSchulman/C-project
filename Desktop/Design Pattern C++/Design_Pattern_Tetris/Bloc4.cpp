#include "Bloc4.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc4::Bloc4 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "violet";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc S2    complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc S2    nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc4::cloner ()
 {
  Bloc4* b = new Bloc4 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc4::afficher ()
 {
  cout << "Bloc S2    " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }

