#ifndef BLOC1_H
#define BLOC1_H

#include "BlocAbstrait.h"

class Bloc1 : public BlocAbstrait
 {
  public:

    Bloc1 (bool fromScratch = false);

    virtual BlocAbstrait* cloner   ();
    virtual void          afficher ();
 };

#endif // BLOC1_H
