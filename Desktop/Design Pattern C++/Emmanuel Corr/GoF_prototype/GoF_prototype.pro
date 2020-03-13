TEMPLATE = app
CONFIG += console
CONFIG -= app_bundle
CONFIG -= qt

SOURCES += main.cpp \
    BlocAbstrait.cpp \
    Bloc1.cpp \
    GenerateurDeBlocs.cpp \
    Bloc2.cpp \
    Bloc3.cpp \
    Bloc4.cpp \
    Bloc5.cpp \
    Bloc6.cpp \
    Bloc7.cpp

include(deployment.pri)
qtcAddDeployment()

HEADERS += \
    BlocAbstrait.h \
    Bloc1.h \
    GenerateurDeBlocs.h \
    Bloc2.h \
    Bloc3.h \
    Bloc4.h \
    Bloc5.h \
    Bloc6.h \
    Bloc7.h

