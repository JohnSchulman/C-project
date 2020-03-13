#include "Bloc7.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc7::Bloc7 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "gris";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc T     complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc T     nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc7::cloner ()
 {
  Bloc7* b = new Bloc7 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc7::afficher ()
 {
  cout << "Bloc T     " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }

