#ifndef BLOC2_H
#define BLOC2_H

#include "BlocAbstrait.h"

class Bloc2 : public BlocAbstrait
 {
  public:

   Bloc2 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC2_H
