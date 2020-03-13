#ifndef BLOC5_H
#define BLOC5_H

#include "BlocAbstrait.h"

class Bloc5 : public BlocAbstrait
 {
  public:

   Bloc5 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC5_H
