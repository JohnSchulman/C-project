#include "Bloc6.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc6::Bloc6 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "blanc";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc L2    complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc L2    nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc6::cloner ()
 {
  Bloc6* b = new Bloc6 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc6::afficher ()
 {
  cout << "Bloc L2    " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }

