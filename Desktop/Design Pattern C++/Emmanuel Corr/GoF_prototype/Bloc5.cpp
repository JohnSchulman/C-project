#include "Bloc5.h"

#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

Bloc5::Bloc5 (bool fromScratch)
 {
  if (fromScratch)
        {
         couleur  = "vert";
         x        = rand () % 10;
         y        = rand () % 10;
         rotation = (rand () % 4) * 90;

         cout << "Le bloc L1    complet long a construire => couleur " << couleur << ", x=" << x << ", y=" << y << " et rot=" << rotation << endl;

         for (unsigned long i=0; i<100000000; i++);
        }
   else {
         cout << "Le bloc L1    nu rapide a construire => ";
         couleur = "transparent";
         x        = 0;
         y        = 0;
         rotation = 0;
        }

 }

BlocAbstrait* Bloc5::cloner ()
 {
  Bloc5* b = new Bloc5 ();

  b->x        = x;
  b->y        = y;
  b->rotation = rotation;
  b->couleur  = couleur;

  return b;
 }

void Bloc5::afficher ()
 {
  cout << "Bloc L1    " << couleur << " en " << x << "," << y << " avec rot=" << rotation << endl;
 }

